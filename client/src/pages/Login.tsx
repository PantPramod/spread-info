import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import baseUrl from "../baseUrl"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [information, setInformation] = useState({
        email: '',
        password: ''
    })
    const submitHandler = async (e: any) => {
        e.preventDefault()
        const { email, password } = information
        try {
            const { data } = await axios.post(`${baseUrl}/api/user/login`, {
                email, password
            })
            console.log(data)
            toast("Logged In Successfully")
            navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <form
            onSubmit={submitHandler}
            className="bg-emerald-950 text-gray-300 min-h-screen"
        >
            <h1 className="text-3xl text-center p-10 pt-20">Login</h1>
            <input
                type="text"
                placeholder="Email"
                className="border bg-transparent mx-auto block w-[30%] p-2 rounded-md"
                value={information.email}
                onChange={(e) => setInformation({ ...information, email: e.target.value })}

            />
            <input
                type="password"
                placeholder="Password"
                className="mt-10 border bg-transparent mx-auto block w-[30%] p-2 rounded-md"
                value={information.password}
                onChange={(e) => setInformation({ ...information, password: e.target.value })}
            />
            <button className="mt-14 border px-8 py-3 rounded-md mx-auto block">Login</button>
            <Link to="/signup" className="mt-2 text-center block text-[#64f05f]">
                Don't have account Signin
            </Link>
        </form>
    )
}

export default Login
