import {
    greeting,
    business,
    resume,
    // uploaded 
} from '../assets'

const categories = [
    {
        title: "Business Card",
        url: business,
        redirect: "/dashboard/business-card"
    },
    {
        title: "Greeting Card",
        url: greeting,
        redirect: "/dashboard/greeting-card"
    },
    // {
    //     title: "Uploaded Card",
    //     url: uploaded,
    //     redirect: "/dashboard/uploaded-card"
    // },
    {
        title: "Resume",
        url: resume,
        redirect: "/dashboard/resume"
    },
]

export default categories