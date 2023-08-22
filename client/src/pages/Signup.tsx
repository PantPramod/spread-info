import axios from "axios"
import { Link } from "react-router-dom"
import baseUrl from "../baseUrl"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [information, setInformation] = useState({
        name: "", email: "", password: ""
    })

    const submitHandler = async (e:any) => {
        e.preventDefault()
        const { name, email, password } = information
        try {
            const { data } = await axios.post(`${baseUrl}/api/user/signup`, {
                name, email, password, isEmailVerified: false, role: "user"
            })
            console.log(data)
            toast("An Email has been send to your Emaill Adress to verify Your Email")
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <form onSubmit={submitHandler} className="bg-emerald-950 text-gray-300 min-h-screen">
            <ToastContainer />
            <h1 className="text-3xl text-center p-10 pt-20">Register New User</h1>
            <input
                type="name"
                placeholder="name"
                className="border bg-transparent mx-auto block w-[30%] p-2 rounded-md"
                value={information.name}
                onChange={(e) => setInformation({ ...information, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Email"
                className="mt-10 border bg-transparent mx-auto block w-[30%] p-2 rounded-md"
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
            <button type="submit" className="mt-14 border px-8 py-3 rounded-md mx-auto block">Register</button>
            <Link to="/login" className="mt-2 text-center block text-[#64f05f]">Already have an account Login</Link>
        </form>
    )
}

export default Signup
