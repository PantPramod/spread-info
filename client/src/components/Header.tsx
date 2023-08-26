// import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaRegRectangleList } from 'react-icons/fa6'
import { GlobalContext } from "./ContextProvider"
import { useContext, useState } from 'react'

type propType = {
    name: string | null,
    page?: string,
    nav1?:string,
    nav2?:string
}
const Header = ({ name, page, nav1, nav2 }: propType) => {
    const { setEmail, setId, setName } = useContext(GlobalContext)
    const [show, setShow] = useState(false)
    const logout = () => {
        setId('')
        setEmail('')
        setName('')
        setShow(false)
    }

    return (
        <header className='relative p-4 bg-emerald-900  flex w-full justify-end items-center gap-x-8'>
            {
                page !== "dashboard" &&
                <Link to={nav1||"/dashboard/business-card"}>
                    <BsPlusSquareFill color="white" size={22} />
                </Link>
            }
            {name &&
                <>
                    {
                        page !== "dashboard" &&
                        <Link to={nav2||"/dashboard/allcards"}>
                            <FaRegRectangleList color="white" size={22} />
                        </Link>
                    }
                    <p
                        onClick={() => setShow(prev => !prev)}
                        className='cursor-pointer text-center leading-10 inline-block bg-[#ac3333] w-10 h-10 text-xl rounded-full  text-white'>
                        {name && name[0]}
                    </p>
                </>
            }
            {
                show &&
                <div className="absolute top-[100%] rounded-md w-[200px] h-[200px] bg-emerald-800 shadow-2xl text-gray-300 p-4">
                    <p
                        onClick={logout}
                        className="pl-4 hover:text-white cursor-pointer border-b-gray-500 border-b p-3">Logout</p>
                </div>

            }
        </header>
    )
}

export default Header
