import { useContext, useState, useEffect } from 'react'
import baseUrl from '../../baseUrl'
import axios from 'axios'
import { GlobalContext } from '.././ContextProvider';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import EditableCard from '../../components/EditableCard';
import { HexColorPicker } from "react-colorful";

type infoType = {
    name: string,
    email: string,
    company: string,
    contact: string,
    address: string,
    color: string,
    position: string,
    varient: "dark" | 'light'|'brown',
}
const Dashboard = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [color, setColor] = useState("#000000");

    const [showColorPicker, setShowColorPicker] = useState(false)

    const [info, setInfo] = useState<infoType>({
        name: '',
        email: '',
        company: '',
        contact: '',
        address: '',
        color: 'black',
        position: '',
        varient: "dark",

    })

    const [link, setLink] = useState('')

    const { id, name } = useContext(GlobalContext)

    const submitHandler = async () => {
        try {
            const { data } = await axios.post(`${baseUrl}/api/info`, {
                ...info,
                ...(id && { userId: id })
            })
            setLink(`${window.location.href}/${data._id}`)
            setShowMessage(true);
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        setInfo({ ...info, color: color })
    }, [color])


    return (
        <Layout>
            <Header
                name={name}
            />
            <div className='flex w-full  h-[88vh] '>
                <div className='w-[300px] bg-emerald-800 overflow-x-hidden p-4 overflow-y-auto'>
                    <div className='flex justify-between items-center relative'>
                        <p className='text-gray-200 mb-2'>{name}'s Dashboard</p>
                        <button
                            style={{ background: info.color }}
                            onClick={() => setShowColorPicker(prev => !prev)}
                            className='w-6 h-6 inline-block border-white text-white '></button>
                        {showColorPicker &&
                            <div className='absolute z-[2] top-[100%] right-0  '>
                                <HexColorPicker
                                    color={color}
                                    onChange={setColor}
                                />
                            </div>
                        }
                    </div>

                    <div
                        onClick={() => { setInfo({ ...info, varient: "dark", color: "black" }) }}
                        className='mt-6 scale-50 origin-top-left border border-black border-dashed shadow-2xl  bg-black rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto cursor-pointer'>
                        <h1 className='text-center py-4 text-3xl text-blue-800 font-bold'>Company Name</h1>

                        <h2 className='mt-4 text-xl text-green-600 text-center'>User Name</h2>
                        <p className='mt-1 text-xl text-green-600 text-center '>Role</p>
                        <p className='text-xs text-gray-300 pb-10 w-1/2 text-center mx-auto mt-4'>
                            <strong>Address:</strong>   asa asj jks ajkshjas ajksa skajs jkas akjsas ajks
                        </p>
                        <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                            <h3 className='text-right text-sm text-gray-200'>emailadress</h3>

                            <p className='text-right text-xs text-gray-200'>mobileno</p>
                        </div>
                    </div>
                    <div
                        onClick={() => { setInfo({ ...info, varient: "light", color: "white" }) }}
                        className=' -mt-20 scale-50 origin-top-left border border-black border-dashed shadow-2xl  bg-white rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto cursor-pointer'>
                        <h1 className='text-center py-4 text-3xl text-blue-800 font-bold'>Company Name</h1>

                        <h2 className='mt-4 text-xl text-black text-center'>User Name</h2>
                        <p className='mt-1 text-xl text-black text-center '>Role</p>
                        <p className='text-xs text-black pb-10 w-1/2 text-center mx-auto mt-4'>
                            <strong>Address:</strong>   asa asj jks ajkshjas ajksa skajs jkas akjsas ajks
                        </p>
                        <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                            <h3 className='text-right text-sm text-black'>emailadress</h3>

                            <p className='text-right text-xs text-black'>mobileno</p>
                        </div>
                    </div>
                    <div
       onClick={() => { setInfo({ ...info, varient: "brown", color: "#06083A" }) }}
       
        className={`-mt-20 scale-50 origin-top-left border border-dashed shadow-2xl  bg-[#06083A] rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto cursor-pointer`} >
        <h1 className='text-center py-4 text-3xl text-blue-800 font-bold'>Company Name</h1>

        <h2 className='mt-4 text-xl text-green-600 text-center'>User Name</h2>
        <p className='mt-1 text-xl text-green-600 text-center '>Role</p>
        <p className='text-xs text-gray-200 pb-10 w-1/2 text-center mx-auto mt-4'>
            <strong>Address:</strong>  asa asj jks ajkshjas ajksa skajs jkas akjsas ajks
        </p>
        <div className='flex justify-between absolute bottom-2 left-4  right-4'>
            <h3 className='text-right text-sm text-white'>emailadress</h3>

            <p className='text-right text-xs text-white'>mobileno</p>
        </div>
    </div>

                </div>

                <div className='flex-1'>
                    <h2 className="text-center text-xl">Your Card</h2>
                    <div className='mx-auto block  w-full flex-1'>
                        <EditableCard
                            info={info}
                            setInfo={setInfo}
                        />
                        <button
                            onClick={submitHandler}
                            className='block mx-auto border px-8 py-2 rounded-md mt-5 text-sm text-white'
                        >Publish</button>
                    </div>
                </div>

            </div>
            <div className=" bg-emerald-900 flex items-center justify-center">

                <div className="flex gap-y-20 flex-col w-full px-2 sm:px-10 justify-between md:flex-row">
                    <div className=" text-white w-full mx-auto sm:mx-[unset]">
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
        </Layout>
    )
}

export default Dashboard
