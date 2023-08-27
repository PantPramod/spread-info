export interface ContactInfoType {
    types: "phone" | "email" | "github" | "linkedin",
    value: string,
    open?: boolean,
    _id?:string
  }
  export interface educationInterface {
    college: string,
    course: string,
    startingYear: string,
    exitYear: string,
    _id?:string
  }
  export interface skillsInterface {
    headings: string,
    texts: string,
    _id?:string
  }
  
  export interface experienceInterface {
    role: string,
    company: string,
    description: string,
    duration: string,
    _id?:string
  }
  
  export  interface projectsInterface {
    title: string,
    technology: string,
    description: string,
    _id?:string
  }

 export interface resumeInterface{
    contactInfo:ContactInfoType[],
    education:educationInterface[],
    skills:skillsInterface[],
    experience:experienceInterface[],
    projects:projectsInterface[]
    name:string,
    role:string,
    about:string,
    _id?:string
 }