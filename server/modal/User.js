import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is Required'],
        unique : true
    },
    password:String,
    name:String,
    role:String,
    isEmailVerified:Boolean
})

const User  = mongoose.model('user', userSchema)

export default User