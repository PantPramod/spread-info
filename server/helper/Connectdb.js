import mongoose from "mongoose"

const connectDB = async(str) => {
    try {
       await mongoose.connect(str)
       console.log("Connected with db")
    } catch (err) {
        console.log("Can't Connect with db",err)
    }
}

export default connectDB