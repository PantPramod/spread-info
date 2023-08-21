import { useEffect, useState } from "react"
import baseUrl from "../baseUrl"
import { useParams } from "react-router-dom"
import axios from 'axios'

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

            <div
                style={{ background: `${info?.color}` }}
                className={`border border-dashed shadow-2xl mt-10 bg-[${info?.color}] rounded-md w-[500px] min-h-[200px] p-4 relative`}>
                <h1 className='text-center py-4 text-3xl text-blue-800'>{info?.company}</h1>

                <h2 className='mt-4 text-xl text-green-600 text-center'>{info?.name}</h2>
                <p className='mt-1 text-xl text-green-600 text-center '>{info?.position}</p>
                <p className='text-xs text-gray-500 pb-10 w-1/2 text-center mx-auto mt-4'>
                    <strong>Address:</strong>   {info?.address}
                </p>
                <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                    <h3 className='text-right text-xs text-gray-300'>{info?.email}</h3>

                    <p className='text-right text-xs text-gray-300'>{info?.contact}</p>
                </div>

            </div>
        </div>
    )
}

export default CardPage
