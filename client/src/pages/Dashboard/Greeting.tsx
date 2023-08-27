import { useEffect, useState } from "react"
import baseUrl from "../../baseUrl"
import { useParams } from "react-router-dom"
import axios from 'axios'
import BirthdayCard1 from "../../components/CardsTemplates/BirthdayCard1"
//@ts-ignore
import BirthdayCard2 from "../../components/CardsTemplates/BirthdayCard2"



const Greeting = () => {
    const params = useParams();
    const id = params.id
    const [info, setInfo] = useState({
        name: '',
        no: 0
    })
    useEffect(() => {
        if (id) {
            (async () => {
                const { data } = await axios.get(`${baseUrl}/api/birthday/${id}`)
                console.log("card page", data)
                setInfo({ ...data })
            })()
        }
    }, [id])
    return (
        <div className="flex min-h-screen items-center justify-center bg-emerald-900">
            {
                !info?.no &&
                    <BirthdayCard1
                    info={info}
                    setInfo={setInfo}
                />
            }
            {
                info?.no===1 &&
                    <BirthdayCard1
                    info={info}
                    setInfo={setInfo}
                />
            }
             {
                info?.no===2 &&
                    <BirthdayCard2
                    info={info}
                    setInfo={setInfo}
                />
            }
        </div>
    )
}

export default Greeting
