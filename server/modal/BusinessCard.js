import mongoose, { Schema } from 'mongoose'

const BusnissCardSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    position:String,
    color:String,
    address:String,
    company:String,
    userId:Schema.Types.ObjectId

})


const BusinessCard = mongoose.model("BusinessCard", BusnissCardSchema)

export default BusinessCard