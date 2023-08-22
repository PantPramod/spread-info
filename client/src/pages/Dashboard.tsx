import { useContext, useEffect, useState } from 'react'
import baseUrl from '../baseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './ContextProvider';

const Dashboard = () => {
    const navigate = useNavigate()
    const [interfaces, setinterfaces] = useState('createcard')
    const [showMessage, setShowMessage] = useState(false);
    const [allCards, setAllCards] = useState<any>([])
    const [info, setInfo] = useState({
        name: '',
        email: '',
        company: '',
        contact: '',
        address: '',
        color: 'black',
        position: ''

    })
    const [link, setLink] = useState('')
    const { id, name } = useContext(GlobalContext)
    const submitHandler = async () => {
        try {
            const { data } = await axios.post(`${baseUrl}/api/info`, {
                ...info, userId: id
            })
            setLink(`${window.location.href}/${data._id}`)
            setShowMessage(true);
            //  navigate(data?._id)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (interfaces === "mycards") {
            (async () => {
                const { data } = await axios.get(`${baseUrl}/api/info/userid/${id}`)
                console.log(data)
                setAllCards([...data])
            })()
        }
    }, [interfaces])

    return (
        <div className='min-h-screen bg-emerald-900'>
            <header className='p-4 bg-emerald-900  flex'>
                {
                    interfaces === "createcard" &&
                    <button
                        onClick={() => setinterfaces("mycards")}
                        className='mr-4 inline-block ml-auto  bg-blue-600 text-white px-5 py-2 rounded-md'>My Cards</button>
                }
                {
                    interfaces === "mycards" &&
                    <button
                        onClick={() => setinterfaces("createcard")}
                        className='mr-4 inline-block ml-auto  bg-blue-600 text-white px-5 py-2 rounded-md'>Create Cards</button>
                }

                {name &&
                    <p className=' text-center leading-10 inline-block bg-[#ac3333] w-10 h-10 text-xl rounded-full  text-white'>
                        {name && name[0]}
                    </p>
                }
            </header>
            {
                interfaces === "createcard" &&
                <div className=" bg-emerald-900 flex items-center justify-center">

                    <div className="flex gap-y-20 flex-col-reverse w-full px-2 sm:px-10 justify-between md:flex-row-reverse">
                        <div className=" text-white w-full mx-auto sm:mx-[unset]">

                            {(info.name || info.email || info.address || info.company || info.position || info.contact) &&
                                <>
                                    <h2 className="text-center text-xl">Preview</h2>
                                    <div
                                        style={{ background: `${info?.color}` }}
                                        className={`border border-dashed shadow-2xl mt-10 bg-[${info?.color}] rounded-md  min-h-[200px] p-4 relative  md:w-[500px] ml-auto`}>
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
                                </>
                            }
                        </div>

                        <div className="mt-10 md:mt-0 flex flex-col bg-blue-900 w-full md:w-1/2 px-10 text-white rounded-md ">

                            <h2 className="text-center font-bold text-2xl py-4">Fill Informations </h2>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="mb-3 bg-transparent border border-white p-2 rounded-sm"
                                value={info.name}
                                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Your Position"
                                className="mb-3 bg-transparent border border-white p-2 rounded-sm"
                                value={info.position}
                                onChange={(e) => setInfo({ ...info, position: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Company Name"
                                className="mb-3 bg-transparent border border-white p-2 rounded-sm"
                                value={info.company}
                                onChange={(e) => setInfo({ ...info, company: e.target.value })}
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="mb-3 bg-transparent border border-white p-2 rounded-sm"
                                value={info.email}
                                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Contact"
                                className="mb-3 bg-transparent border border-white p-2 rounded-sm"
                                value={info.contact}
                                onChange={(e) => setInfo({ ...info, contact: e.target.value })}
                            />


                            <input
                                type="color"
                                placeholder="select color"
                                className="mb-3 bg-transparent border border-white p-2 rounded-sm"
                                value={info.color}
                                onChange={(e) => setInfo({ ...info, color: e.target.value })}
                            />

                            <textarea
                                placeholder="Company Address"
                                className="mb-3 bg-transparent border border-white p-2 rounded-sm"
                                value={info.address}
                                onChange={(e) => setInfo({ ...info, address: e.target.value })}
                            ></textarea>



                            <button
                                onClick={submitHandler}
                                className="mt-5 bg-red-600 text-white mb-4 py-3 rounded-md uppercase">Save</button>
                        </div>
                    </div>
                    {showMessage &&

                        <div
                            onClick={() => setShowMessage(false)}
                            className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000069] flex items-center justify-center'>
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className='w-[90%] sm:w-[400px] bg-black text-white rounded-xl tex-white p-6'>
                                <h2>Your Link is</h2>
                                <p className='mt-4 text-xs'>{link}</p>

                                <button onClick={() => { navigator.clipboard.writeText(link); }} className='mx-auto  block py-2  mt-5 bg-green-600 text-white rounded-md p-3'>Copy</button>

                            </div>
                        </div>
                    }
                </div>
            }
            {
                interfaces == "mycards" &&
                <div className='bg-emerald-900 min-h-screen mt-10 flex-col sm:flex-row  flex flex-wrap gap-x-8 gap-y-8 w-[90%] mx-auto'>
                    {
                        allCards.map((card: any) => <div
                            key={card._id}
                            onClick={() => navigate(card?._id)}
                            style={{ background: `${card?.color}` }}
                            className={`self-start border border-dashed shadow-2xl  bg-[${card?.color}] rounded-md  min-h-[200px] p-4 relative w-full  md:w-[500px] `}>
                            <h1 className='text-center py-4 text-3xl text-blue-800'>{card?.company}</h1>

                            <h2 className='mt-4 text-xl text-green-600 text-center'>{card?.name}</h2>
                            <p className='mt-1 text-xl text-green-600 text-center '>{card?.position}</p>
                            <p className='text-xs text-gray-500 pb-10 w-1/2 text-center mx-auto mt-4'>
                                <strong>Address:</strong>   {card?.address}
                            </p>
                            <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                                <h3 className='text-right text-xs text-gray-300'>{card?.email}</h3>

                                <p className='text-right text-xs text-gray-300'>{card?.contact}</p>
                            </div>

                        </div>)
                    }
                </div>
            }

        </div>
    )
}

export default Dashboard
