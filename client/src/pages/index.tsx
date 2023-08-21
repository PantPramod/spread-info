import { Link } from "react-router-dom"
import {motion} from "framer-motion"


const index = () => {
  return (
    <div className="bg-emerald-900 text-white min-h-screen flex items-center justify-center flex-col">
      <p className=" text-xl">Create Your Business Card</p>

      <Link to='/dashboard'>
        <motion.button 
        whileHover={{scale:1.05}}
       
        
        className="mt-10 bg-red-700 text-white px-4 py-3 uppercase rounded-md font-semibold">Get Started</motion.button>
      </Link>
    </div>
  )
}

export default index
