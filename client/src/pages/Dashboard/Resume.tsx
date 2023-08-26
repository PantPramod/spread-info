import { useContext } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import { GlobalContext } from "../../components/ContextProvider"
import { IoMdContact, IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { RiGraduationCapFill } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { FaSuitcase } from 'react-icons/fa'

const Resume = () => {
  const { name } = useContext(GlobalContext)
  return (
    <Layout>
      <Header
        name={name}
        nav1="/dashboard/resume"
        nav2="/dashboard/resume/allcards"
      />
      <div className=" bg-white max-w-[900px] mx-auto  flex ">
        <div className="w-[400px] flex-0 bg-black self-stretch">
          <div className="triangle-up-left"></div>

          <div className="border-l  ml-4  border-l-[#ccb119] relative ">
            <div className="flex items-center">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-10 absolute -left-1"></div>
              <p className="text-white ml-6 text-xl uppercase font-bold">
                <IoMdContact
                  color="white"
                  className="inline mr-2"
                  size={28}
                />
                Contact Me</p>
            </div>

            <div className="flex mt-10 items-center">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1"></div>
              <p className="text-white ml-6 ">
                <IoMdCall
                  color="white"
                  className="inline mr-2"
                  size={25}
                />
                +91-9876543210
              </p>
            </div>

            <div className="flex mt-3 items-center">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1"></div>
              <p className="text-white ml-6 ">
                <MdEmail
                  color="white"
                  className="inline mr-2"
                  size={25}
                />
                abcd@test.com
              </p>
            </div>


            <div className="flex mt-3 items-center">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1"></div>
              <p className="text-white ml-6 ">
                <AiFillGithub
                  color="white"
                  className="inline mr-2"
                  size={25}
                />
                https://github.com/pantpramod
              </p>
            </div>

            <div className="flex mt-3 items-center">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1"></div>
              <p className="text-white ml-6 ">
                <BsLinkedin
                  color="white"
                  className="inline mr-2"
                  size={25}
                />
                www.linkedin.com/in/pramodpant100
              </p>
            </div>

            <div className="mt-20 flex items-center">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-10 absolute -left-1"></div>
              <p className="text-white ml-6 text-xl uppercase font-bold">
                <RiGraduationCapFill
                  color="white"
                  className="inline mr-2"
                  size={28}
                />
                Education</p>
            </div>

            <div className="mt-10 flex ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
              <div className="text-white ml-6 ">
                <p className="font-bold">STANFORD UNIVERSITY</p>
                <p className="">Masters degree Graduate</p>
                <p className="">2011 - 2013</p>
              </div>
            </div>

            <div className="mt-3 flex ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
              <div className="text-white ml-6 ">
                <p className="font-bold">STANFORD UNIVERSITY</p>
                <p className="">Masters degree Graduate</p>
                <p className="">2011 - 2013</p>
              </div>
            </div>

            <div className="mt-20 flex items-center">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-10 absolute -left-1"></div>
              <p className="text-white ml-6 text-xl uppercase font-bold">
                <GiSkills
                  color="white"
                  className="inline mr-2"
                  size={28}
                />
                Skills</p>
            </div>
            <div className="mt-10 flex ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
              <div className="text-white ml-6 ">
                <p className="font-bold">Frontend</p>
                <p className="">HTML, CSS, JS, React JS, Next JS, Redux</p>
              </div>
            </div>

            <div className="mt-3 flex ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
              <div className="text-white ml-6 ">
                <p className="font-bold">Backend</p>
                <p className="">Node JS, Express JS</p>
              </div>
            </div>

            <div className="mt-3 flex ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
              <div className="text-white ml-6 ">
                <p className="font-bold">Databases</p>
                <p className="">MongoDB, MySQL</p>
              </div>
            </div>

            <div className="mt-3 flex ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
              <div className="text-white ml-6 ">
                <p className="font-bold">Tools</p>
                <p className="">Git, Github, VS Code, Trelo, Clickup</p>
              </div>
            </div>
          </div>

        </div>
        <div className="flex-1 ">

          <div className=" relative pt-20 ml-8 min-h-screen w-[calc(100%-32px)] border-l border-l-[#000000] h-full">

            <div className="flex items-center w-full bg-gray-200">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-20 absolute -left-1 "></div>
              <div className="">
                <p className=" text-4xl pt-6 px-5 font-bold  text-black">Pramod K. Pant</p>
                <p className="bg-gray-200 text-black px-5 pb-6">Web developer</p>
              </div>
            </div>

            <div className="px-5 flex items-center w-full ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-14 absolute -left-1 mt-10 self-start"></div>
              <div className="">
                <p className=" text-2xl pt-6 font-bold  text-black uppercase">
                  <BsPersonCircle className="bg-[#ccb119] rounded-full inline mr-2" color="" />
                  About me</p>
                <p className=" text-black  pb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam neque excepturi vitae veritatis ratione fuga animi illo, beatae impedit, atque similique reiciendis delectus quod, at hic inventore iusto aliquam. Facilis!</p>
              </div>
            </div>

            <div className="mt-14 px-5">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-14 absolute -left-1 mt-10 self-start"></div>
              <p className=" text-2xl pt-6  font-bold  text-black uppercase">
                <FaSuitcase
                  className="bg-[#ccb119] rounded-full inline mr-2"
                  color=""
                />
                Job Experience</p>
              <p className="mt-4 flex justify-between ">
                <span className="font-bold">Frontend Developer</span>
                <span className="">2020 - Present</span>
              </p>
              <p className="font-semibold">Cosedge</p>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur tempora laborum fugit! Beatae dolorum,</p>


              <p className="mt-4 flex justify-between ">
                <span className="font-bold">React JS Intern</span>
                <span className="">2019 - 2020</span>
              </p>
              <p className="font-semibold">Cosedge</p>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur tempora laborum fugit! Beatae dolorum,</p>
            </div>

            <div className="px-5">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-14 absolute -left-1 mt-10 self-start"></div>
              <div className="mt-20">
                <p className=" text-2xl pt-6 font-bold  text-black uppercase">
                  <AiFillProject
                    className="bg-[#ccb119] rounded-full inline mr-2"
                    color=""
                  />
                  Projects</p>
              </div>
              <p className="mt-4 flex justify-between font-bold">
                Form Builder
              </p>
              <p className="font-semibold">Technology: React JS, Redux, Nest JS, MongoDB</p>
              <p className="">User can create Custom Forms and collect theier responses</p>

              <p className="mt-4 flex justify-between font-bold">
                Periapparel
              </p>
              <p className="font-semibold">Technology: React JS, Redux, Node JS, MongoDB</p>
              <p className="">Ecommerce Website for custom patches</p>

              <p className="mt-4 flex justify-between font-bold">
               Lets Assess
              </p>
              <p className="font-semibold">Technology: React JS, Redux, Node JS, MongoDB</p>
              <p className="">Evaluate the marks for each candidate</p>

            </div>
          </div>
        </div>

      </div>
      <div className="pb-20"></div>
    </Layout>
  )
}

export default Resume
