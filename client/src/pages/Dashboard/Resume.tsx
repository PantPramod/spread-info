import { useContext, useState } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import { GlobalContext } from "../../components/ContextProvider"
import { IoMdContact } from 'react-icons/io'
import { AiFillProject } from 'react-icons/ai'
import { RiGraduationCapFill } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { FaSuitcase } from 'react-icons/fa'
import axios from "axios"
import baseUrl from "../../baseUrl"
import { ContactInfoType, educationInterface, experienceInterface, projectsInterface, skillsInterface } from "../../helper/types"
import { labelToIcon, options } from "../../helper/resumehelper"



const Resume = () => {
  const { name, id } = useContext(GlobalContext);
  const [contactInfo, setContactInfo] = useState<ContactInfoType[]>([
    {
      types: "email",
      value: '',
      open: false,
    }
  ])
  const [education, setEducation] = useState<educationInterface[]>([{
    college: '',
    course: '',
    startingYear: '',
    exitYear: ''
  }])
  const [skills, setSkills] = useState<skillsInterface[]>([
    {
      headings: '',
      texts: ''
    }
  ])
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    role: "",
    about: "",
  })
  const [experience, setExperience] = useState<experienceInterface[]>([
    {
      company: "",
      description: "",
      duration: "",
      role: "",
    }
  ])
  const [projects, setProjects] = useState<projectsInterface[]>([
    {
      title: "",
      technology: "",
      description: ""
    }
  ])
  const [link, setLink] = useState('')
  const [show, setShow] = useState(false)

  const submitHandler = async () => {
    let arr = []
    for (let i = 0; i < contactInfo.length; i++) {
      arr.push(
        {
          types: contactInfo[i]?.types,
          value: contactInfo[i]?.value
        }
      )
    }
    const resumeData = {
      contactInfo: arr,
      education,
      skills,
      experience,
      projects,
      ...basicInfo,
      ...(id && { userId: id })
    }
    try {
      const { data } = await axios.post(`${baseUrl}/api/resume`, {
        ...resumeData,
      })
      setLink(`${window.location.origin}/dashboard/resume/${data._id}`)
      setShow(true);
      console.log(data)
    } catch (err) {
    }
  }

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
            {
              contactInfo.map((contact, index) => <div
                key={index}
                className="flex mt-3 items-center">
                <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1"></div>
                <p className="text-white ml-6 flex w-full">
                  <div className="relative self-center shadow-sm shadow-white">
                    <span onClick={() => {
                      contactInfo[index] = { ...contactInfo[index], open: !contactInfo[index].open }
                      setContactInfo([...contactInfo])
                    }}>{labelToIcon[contact.types]}</span>
                    {
                      contactInfo[index].open
                      &&
                      <div className="shadow-sm shadow-white absolute -left-1 -right-1 z-[99] bg-black">
                        {
                          options.map((opt) => (<div
                            onClick={() => {
                              contactInfo[index] = { types: opt.value, value: contact.value, open: false }
                              setContactInfo([...contactInfo])
                            }}
                            className=" hover:bg-[#353333f3] cursor-pointer py-2 flex justify-center">
                            {opt.icon}
                          </div>
                          ))
                        }
                      </div>
                    }
                  </div>
                  <input
                    type="text"
                    placeholder="+91-9876543210"
                    className="ml-2 bg-transparent outline-none  self-start w-full"
                    value={contactInfo[index].value}
                    onChange={(e) => {
                      contactInfo[index] = { types: contact.types, value: e.target.value, open: false }
                      setContactInfo([...contactInfo])
                    }}
                  />
                  {index == contactInfo.length - 1 &&
                    <button
                      className="self-start mr-2"
                      onClick={() => {
                        contactInfo.push({ types: "email", value: "", open: false })
                        setContactInfo([...contactInfo])
                      }}>+</button>
                  }
                </p>
              </div>)
            }
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
            {
              education.map((edu, index) => <div className="mt-3 flex ">
                <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
                <div className="text-white ml-6 ">
                  <input
                    type="text"
                    className="font-bold bg-transparent outline-none"
                    placeholder="STANFORD UNIVERSITY"
                    value={edu.college}
                    onChange={(e) => {
                      education[index] = { ...education[index], college: e.target.value }
                      setEducation([...education])
                    }}
                  />
                  <input
                    type="text"
                    className=" bg-transparent outline-none"
                    placeholder="Masters degree Graduate"
                    value={education[index].course}
                    onChange={(e) => {
                      education[index] = { ...education[index], course: e.target.value }
                      setEducation([...education])
                    }}
                  />
                  <p className="flex ">
                    <input
                      type="text"
                      className=" bg-transparent outline-none w-[55px]"
                      placeholder="2011"
                      value={education[index].startingYear}
                      onChange={(e) => {
                        education[index] = { ...education[index], startingYear: e.target.value }
                        setEducation([...education])
                      }}
                    />
                    <span className="pr-2">-</span>
                    <input
                      type="text"
                      className="bg-transparent outline-none w-[55px]"
                      placeholder="2019"
                      value={education[index].exitYear}
                      onChange={(e) => {
                        education[index] = { ...education[index], exitYear: e.target.value }
                        setEducation([...education])
                      }}
                    /></p>
                </div>
                {index == education.length - 1 &&
                  <button
                    className=" mr-2 text-white self-end ml-4"
                    onClick={() => {
                      education.push({
                        college: "",
                        course: "",
                        exitYear: "",
                        startingYear: ""
                      })
                      setEducation([...education])
                    }}>+</button>
                }
              </div>)
            }
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
            {
              skills.map((skill, index) =>
                <div className="mt-3 flex ">
                  <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
                  <div className="text-white ml-6 ">
                    <input
                      type="text"
                      className="bg-transparent outline-none w-full font-bold"
                      placeholder="Frontend"
                      value={skill.headings}
                      onChange={(e) => {
                        skills[index] = { ...skills[index], headings: e.target.value }
                        setSkills([...skills])
                      }}
                    />
                    <input
                      type="text"
                      className="bg-transparent outline-none w-full "
                      placeholder="HTML, CSS, JS, React JS, Next JS, Redux"
                      value={skills[index].texts}
                      onChange={(e) => {
                        skills[index] = { ...skills[index], texts: e.target.value }
                        setSkills([...skills])
                      }}
                    />
                  </div>
                  {index == skills.length - 1 &&
                    <button
                      className=" mr-2 text-white self-end ml-4"
                      onClick={() => {
                        skills.push({
                          headings: "",
                          texts: ""
                        })
                        setSkills([...skills])
                      }}>+</button>
                  }
                </div>
              )
            }
          </div>
        </div>
        <div className="flex-1 ">
          <div className=" relative pt-20 ml-8 min-h-screen w-[calc(100%-32px)] border-l border-l-[#000000] h-full">
            <div className="flex items-center w-full bg-gray-200">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-20 absolute -left-1 "></div>
              <div className="">
                <p className=" text-4xl pt-6 px-5 font-bold  text-black">
                  <input
                    type="text"
                    className="outline-none bg-transparent w-full"
                    value={basicInfo.name}
                    onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
                    placeholder="Elon Musk"
                  />
                </p>
                <p
                  className="bg-gray-200 text-black px-5 pb-6">
                  <input
                    type="text"
                    className="outline-none bg-transparent w-full"
                    value={basicInfo.role}
                    onChange={(e) => setBasicInfo({ ...basicInfo, role: e.target.value })}
                    placeholder="Web Developer"
                  />
                </p>
              </div>
            </div>
            <div className="px-5 flex items-center w-full relative ">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-14 absolute -left-1 top-0 self-start mt-7"></div>
              <div className="w-full ">
                <p className=" text-2xl  font-bold mt-10  text-black uppercase">
                  <BsPersonCircle className="bg-[#ccb119] rounded-full inline mr-2" color="" />
                  About me</p>
                <p className="mt-3 text-black    w-full">
                  <textarea
                    className="text-justify bg-transparent w-full min-h-[100px] placeholder:text-black outline-none"
                    value={basicInfo.about}
                    onChange={(e) => setBasicInfo({ ...basicInfo, about: e.target.value })}
                    placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam neque excepturi vitae veritatis ratione fuga animi illo, beatae impedit, atque similique reiciendis delectus quod, at hic inventore iusto aliquam. Facilis"
                  >
                  </textarea>
                </p>
              </div>
            </div>

            <div className="mt-14 px-5 relative">
              <div className="bg-[#ccb119] rounded-2xl w-2 h-14 absolute -left-1 self-start"></div>
              <p className=" text-2xl   font-bold  text-black uppercase">
                <FaSuitcase
                  className="bg-[#ccb119] rounded-full inline mr-2"
                  color=""
                />
                Job Experience</p>
              {
                experience.map((exp, index) => <div className="">
                  <p className="mt-4 flex justify-between ">
                    <span className="font-bold">
                      <input
                        type="text"
                        className="bg-transparent outline-none w-full "
                        placeholder="Frontend Developer"
                        value={exp.role}
                        onChange={(e) => {
                          experience[index] = { ...experience[index], role: e.target.value }
                          setExperience([...experience])
                        }}
                      />
                    </span>
                    <span className="">
                      <input
                        type="text"
                        className="bg-transparent outline-none w-[150px] "
                        placeholder="2020 - Present"
                        value={experience[index].duration}
                        onChange={(e) => {
                          experience[index] = { ...experience[index], duration: e.target.value }
                          setExperience([...experience])
                        }}
                      />
                    </span>
                  </p>
                  <p className="font-semibold">
                    <input
                      type="text"
                      className="bg-transparent outline-none w-[150px] "
                      placeholder="Cosedge"
                      value={experience[index].company}
                      onChange={(e) => {
                        experience[index] = { ...experience[index], company: e.target.value }
                        setExperience([...experience])
                      }}
                    />
                  </p>
                  <p className="mt-2">
                    <textarea
                      className="text-justify bg-transparent w-full min-h-[50px] placeholder:text-black outline-none"
                      value={experience[index].description}
                      onChange={(e) => {
                        experience[index] = { ...experience[index], description: e.target.value }
                        setExperience([...experience])
                      }}
                      placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam neque excepturi vitae veritatis "
                    >
                    </textarea>
                  </p>
                  {index == experience.length - 1 &&
                    <button
                      className=" mr-2 text-white bg-gray-500 px-3 rounded-md py-1 self-end ml-4"
                      onClick={() => {
                        experience.push({
                          company: "",
                          description: "",
                          duration: "",
                          role: ""
                        })
                        setExperience([...experience])
                      }}>+</button>
                  }
                </div>)
              }
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
              {
                projects.map((proj, index) => (<div className="">
                  <p className="mt-3 flex justify-between font-bold">
                    <input
                      type="text"
                      className="bg-transparent outline-none w-full "
                      placeholder="Form Builder"
                      value={proj.title}
                      onChange={(e) => {
                        projects[index] = { ...projects[index], title: e.target.value }
                        setProjects([...projects])
                      }}
                    />
                  </p>
                  <p className="font-semibold flex">
                    <span className="mr-2">Technology:</span>
                    <input
                      type="text"
                      className="bg-transparent outline-none w-full "
                      placeholder="React JS, Redux, Node JS, MongoDB"
                      value={projects[index].technology}
                      onChange={(e) => {
                        projects[index] = { ...projects[index], technology: e.target.value }
                        setProjects([...projects])
                      }}
                    />
                  </p>
                  <p className="">
                    <textarea
                      className="text-justify bg-transparent w-full min-h-[50px] placeholder:text-black outline-none"
                      value={projects[index].description}
                      onChange={(e) => {
                        projects[index] = { ...projects[index], description: e.target.value }
                        setProjects([...projects])
                      }}
                      placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam neque excepturi vitae veritatis "
                    >
                    </textarea>
                  </p>
                  {index == projects.length - 1 &&
                    <button
                      className=" mr-2 text-white bg-gray-500 px-3 rounded-md py-1 self-end ml-4"
                      onClick={() => {
                        projects.push({
                          description: "",
                          technology: "",
                          title: ""
                        })
                        setExperience([...experience])
                      }}>+</button>
                  }
                </div>))
              }
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={submitHandler}
        className='mt-10 block mx-auto border px-8 py-2 rounded-md  text-sm text-white'
      >Publish</button>
      <div className="pb-20"></div>
      {show &&
        <div
          onClick={() => setShow(false)}
          className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000069] flex items-center justify-center z-[99999]'>
          <div
            onClick={(e) => e.stopPropagation()}
            className='w-[90%] sm:w-[400px] bg-black text-white rounded-xl tex-white p-6'>
            <h2>Your Link is</h2>
            <p className='mt-4 text-xs'>{link}</p>
            <button onClick={() => { navigator.clipboard.writeText(link); }} className='mx-auto  block py-2  mt-5 bg-green-600 text-white rounded-md p-3'>Copy</button>
          </div>
        </div>
      }
    </Layout>
  )
}

export default Resume

