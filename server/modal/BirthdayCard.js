import Mongoose, { Schema } from 'mongoose'

const BirthDaySchema = new Mongoose.Schema({
    name:String, 
    userId:Schema.Types.ObjectId, 
    no:Number
})

const BirthDay = Mongoose.model('birthday', BirthDaySchema)

export default BirthDay