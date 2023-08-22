import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="bg-emerald-950 text-gray-300 min-h-screen">
            <h1 className="text-3xl text-center p-10 pt-20">Login</h1>
            <input type="text" placeholder="Email" className="border bg-transparent mx-auto block w-[30%] p-2 rounded-md" />
            <input type="password" placeholder="Password" className="mt-10 border bg-transparent mx-auto block w-[30%] p-2 rounded-md" />
            <button className="mt-14 border px-8 py-3 rounded-md mx-auto block">Login</button>
            <Link to="/signup" className="mt-2 text-center block text-[#64f05f]">Don't have account Signin</Link>
        </div>
    )
}

export default Login
