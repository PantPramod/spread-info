
import { FaUserTie } from 'react-icons/fa'
import { TfiUser } from 'react-icons/tfi'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SelectUserType = () => {
  return (
    <div className="min-h-screen bg-emerald-900 text-gray-200 flex items-center justify-center flex-col ">
      <h1 className="font-bold text-3xl -mt-20">Enter as a <BsArrowRight className="inline mr-2" size={40} /></h1>
      <div className="mt-20 flex gap-x-10 w-1/2 justify-between ">
        <Link to="/login">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className=" shadow-emerald-600 shadow-2xl cursor-pointer  text-gray-200 px-6 py-3 rounded-xl uppercase flex flex-col items-center justify-center">
            <FaUserTie className="mb-2" size={50} />
            <span>User</span>
          </motion.div>
        </Link>
        <Link to="/dashboard">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="shadow-emerald-600 shadow-2xl cursor-pointer text-gray-200 px-6 py-3 rounded-xl uppercase flex flex-col items-center justify-center">
            <TfiUser size={50} className="mb-2" />
            <span>Guest</span>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}

export default SelectUserType
