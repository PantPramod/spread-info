
import axios from 'axios'
import Layout from '../../components/Layout'
import Resume1 from '../../components/ResumeTemplates/Resume1'
import {useEffect, useState} from 'react'
import baseUrl from '../../baseUrl'
import { useParams } from 'react-router-dom'
import { resumeInterface } from '../../helper/types'
const GetResumeById = () => {
    const params = useParams();
    const id = params.id
    const [resume, setResume] = useState<resumeInterface|null>(null)
    useEffect(() => {
        if (id) {
            (async () => {
                const { data } = await axios.get(`${baseUrl}/api/resume/${id}`)
                console.log("resume data", data)
                setResume({ ...data })
            })()

        }

    }, [id])
  return (
    <Layout>
      <div className='pt-20'></div>
      {
        resume &&
        <Resume1 resume={resume}/>
      }  
     
    </Layout>
  )
}

export default GetResumeById
