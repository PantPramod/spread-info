// import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaRegRectangleList } from 'react-icons/fa6'

type propType = {
    name: string | null
}
const Header = ({ name }: propType) => {
    return (
        <header className='p-4 bg-emerald-900  flex w-full justify-end items-center gap-x-8'>
            <Link to="/dashboard">
                <BsPlusSquareFill color="white" size={22} />
            </Link>

            <Link to="/dashboard/allcards">
                <FaRegRectangleList color="white" size={22} />
            </Link>

            {name &&
                <p className=' text-center leading-10 inline-block bg-[#ac3333] w-10 h-10 text-xl rounded-full  text-white'>
                    {name && name[0]}
                </p>
            }
        </header>
    )
}

export default Header
