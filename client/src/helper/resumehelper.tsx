import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillGithub} from 'react-icons/ai'
import {  IoMdCall} from 'react-icons/io'

type optionType = {
    value: "phone" | "email" | "github" | "linkedin",
    icon: any
  }
  
export  const options: optionType[] = [
    {
      value: "phone",
      icon: <IoMdCall />
    },
    {
      value: "email",
      icon: <MdEmail />
    },
    {
      value: "github",
      icon: <AiFillGithub />
    },
    {
      value: "linkedin",
      icon: <BsLinkedin />
    }
  ]
  
  export const labelToIcon = {
    phone: <IoMdCall />,
    email: <MdEmail />,
    github: <AiFillGithub />,
    linkedin: <BsLinkedin />
  }