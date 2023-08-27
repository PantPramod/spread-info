import { useEffect, useState } from "react"
import baseUrl from "../../baseUrl"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Card from "../../components/Card"

const CardPage = () => {
    const params = useParams();
    const id = params.id
    const [info, setInfo] = useState({
        name: '',
        email: '',
        company: '',
        contact: '',
        address: '',
        color: 'black',
        position: ''
    })
    useEffect(() => {
        if (id) {
            (async () => {
                const { data } = await axios.get(`${baseUrl}/api/info/${id}`)
                console.log("card page", data)
                setInfo({ ...data })
            })()
        }
    }, [id])
    return (
        <div className="flex min-h-screen items-center justify-center bg-emerald-900">
            {
                info?.name && <Card info={info} />
            }
        </div>
    )
}

export default CardPage
