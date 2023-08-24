import express from 'express'
import { signup, verifyEmail, login } from '../controller/user.js'


const router = express.Router()





router.post('/signup',signup)


router.get('/verifyemail', verifyEmail)


router.post('/login', login)


export default router
