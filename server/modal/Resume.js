import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const ResumeSchema = new mongoose.Schema({
    contactInfo: [
        {
            types: String,
            value: String
        }
    ],
    education: [
        {
            college: String,
            course: String,
            startingYear: String,
            exitYear: String
        }
    ],
    skills: [
        {
            headings: String,
            texts: String
        }
    ],
    name: String,
    role: String,
    about: String,
    experience: [
        {
            role: String,
            company: String,
            description: String,
            duration: String
        }
    ],
    projects: [
        {
            title: String,
            technology: String,
            description: String
        }
    ],
    userId: Schema.Types.ObjectId,
})



const Resume = new mongoose.model('resume', ResumeSchema)

export default Resume