import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import baseUrl from "../baseUrl"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams()
    const [isEmailVerified, setIsEmailVerified] = useState(false)

    useEffect(() => {
        const token = searchParams.get('token')

        if (token) {
            (async () => {
                const { data } = await axios.get(`${baseUrl}/api/user/verifyemail?token=${token}`)
                console.log(data)
                toast("your Email Is Verified")
                setIsEmailVerified(true)
            })()
        }

    }, [])
    return (
        <div className="bg-emerald-900 text-white flex items-center justify-center min-h-screen  ">
            <ToastContainer/>
            {
                isEmailVerified &&
                <button className="bg-[tomato] text-white px-8 py-4">Login</button>
            }

        </div>
    )
}

export default VerifyEmail
