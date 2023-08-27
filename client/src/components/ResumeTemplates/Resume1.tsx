import { IoMdContact } from 'react-icons/io'
import { AiFillProject } from 'react-icons/ai'
import { RiGraduationCapFill } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { FaSuitcase } from 'react-icons/fa'
import { labelToIcon } from '../../helper/resumehelper'
import { ContactInfoType, educationInterface, experienceInterface, projectsInterface, resumeInterface, skillsInterface } from '../../helper/types'
type propType={
    resume:resumeInterface
}
const Resume1 = ({ resume }: propType) => {

    return (
        <>
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
                            resume?.contactInfo?.map((con:ContactInfoType, index:number) => (
                                <div key={con?._id} className={`${index === 0 ? "mt-10" : "mt-3"} flex items-center`}>
                                    <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1"></div>
                                    <p className="text-white ml-6 flex items-center gap-x-2">
                                        {labelToIcon[con?.types]}
                                        {con?.value}
                                    </p>
                                </div>)
                            )
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
                            resume?.education?.map((edu:educationInterface, index: number) => <div
                                key={edu?._id}
                                className={`${index === 0 ? "mt-10" : "mt-3"} flex `}>
                                <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
                                <div className="text-white ml-6 ">
                                    <p className="font-bold">{edu?.college}</p>
                                    <p className="">{edu?.course}</p>
                                    <p className="">{edu?.startingYear} - {edu?.exitYear}</p>
                                </div>
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
                            resume?.skills?.map((skill:skillsInterface, index:number) =>
                                <div className={`${index === 0 ? "mt-10" : "mt-3"} flex `}>
                                    <div className="bg-[#ccb119] rounded-2xl w-2 h-2 absolute -left-1 mt-2"></div>
                                    <div className="text-white ml-6 ">
                                        <p className="font-bold">{skill?.headings}</p>
                                        <p className="">{skill?.texts}</p>
                                    </div>
                                </div>)
                        }
                    </div>

                </div>
                <div className="flex-1 ">

                    <div className=" relative pt-20 ml-8 min-h-screen w-[calc(100%-32px)] border-l border-l-[#000000] h-full">

                        <div className="flex items-center w-full bg-gray-200">
                            <div className="bg-[#ccb119] rounded-2xl w-2 h-20 absolute -left-1 "></div>
                            <div className="">
                                <p className=" text-4xl pt-6 px-5 font-bold  text-black">{resume?.name}</p>
                                <p className="bg-gray-200 text-black px-5 pb-6">{resume?.role}</p>
                            </div>
                        </div>

                        <div className="px-5 flex items-center w-full ">
                            <div className="bg-[#ccb119] rounded-2xl w-2 h-14 absolute -left-1 mt-10 self-start"></div>
                            <div className="">
                                <p className=" text-2xl pt-6 font-bold  text-black uppercase">
                                    <BsPersonCircle className="bg-[#ccb119] rounded-full inline mr-2" color="" />
                                    About me</p>
                                <p className=" text-black  pb-6 text-justify mt-10">{resume?.about}</p>
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
                            {
                                resume?.experience?.map((exp:experienceInterface, index:number) => <div
                                    key={exp?._id}
                                    className={` ${index === 0 ? "mt-10" : "mt-3"}`}>
                                    <p className=" flex justify-between ">
                                        <span className="font-bold">{exp?.role}</span>
                                        <span className="">{exp?.duration}</span>
                                    </p>
                                    <p className="font-semibold">{exp?.company}</p>
                                    <p className="mt-2">{exp?.description}</p>
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
                                resume?.projects?.map((project:projectsInterface, index:number) => <div className={`${index === 0 ? "mt-10" : "mt-3"}`} key={project?._id}>
                                    <p className=" flex justify-between font-bold">
                                        {project?.title}
                                    </p>
                                    <p className="font-semibold">Technology: {project.technology}</p>
                                    <p className="">{project?.description}</p>
                                </div>)
                            }

                        </div>
                    </div>
                </div>

            </div>
            <div className="pb-20"></div>
        </>
    )
}


export default Resume1