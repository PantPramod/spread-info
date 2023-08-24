import User from "../modal/User.js"
import sendMail from '../helper/sendEmail.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'

const signup =asyncHandler( async(req, res) => {
    
        const { name, email, password } = req.body

        const  hashedPassword = await bcrypt.hash(password, 10);

        const  newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            isEmailVerified: false,
            role: "user"
        })

        const user = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }

        const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' });

        sendMail(process.env.EMAIL, process.env.PASSWORD, req.body.email, token)

        res.status(201).send("Verification Email Send To your Email ")


})


const verifyEmail =asyncHandler( async (req, res) => {

        const token = req.query.token
        if (!token) {
            res.status(401)
            throw new Error("No token, authorization denied")
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        await User.findOneAndUpdate({ email: decoded.user.email }, { isEmailVerified: true })
        res.send("Email Is Verified")


})

const login =asyncHandler( async (req, res) => {

        const { email, password } = req.body;

        const response = await User.findOne({ email });

        if (!response) {
            res.status(400)
            throw new Error("Email Not Exist!")
        }

        const passwordMatch = bcrypt.compare(password, response.password);

        if (!passwordMatch) {
            res.status(400)
            throw new Error("Wrong Credentials")
        }

        const user = {
            id: response._id,
            name: response.name,
            email: response.email
        }

        const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' });


        res.status(200).json({
            id: response._id,
            name: response.name,
            email: response.email,
            message: 'Login successful',
            token: token
        });

  
})


export { signup, verifyEmail, login }