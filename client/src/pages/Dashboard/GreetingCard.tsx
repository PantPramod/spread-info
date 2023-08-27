import BirthdayCard1 from "../../components/CardsTemplates/BirthdayCard1"
//@ts-ignore
import BirthdayCard2 from "../../components/CardsTemplates/BirthdayCard2"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import { useState } from 'react'
import animation from '../../assets/animation.png'
import { GlobalContext } from "../../components/ContextProvider"
import { useContext } from 'react'
import axios from "axios"
import baseUrl from "../../baseUrl"

const GreetingCard = () => {
  const { name, id } = useContext(GlobalContext)
  const [info, setInfo] = useState({
    name: '',
    no: 1
  })
  const [showMessage, setShowMessage] = useState(false)
  const [link, setLink] = useState('')

  const submitHandler = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/api/birthday`, {
        ...info,
        ...(id && { userId: id })
      })
      setLink(`${window.location.origin}/dashboard/greeting/${data._id}`)
      setShowMessage(true);
      console.log(data)
    } catch (err) {
    }
  }
  return (
    <Layout>
      <Header
        name={name}
        nav1="/dashboard/greeting-card"
        nav2="/dashboard/greeting-card/allcards"
      />
      <div className="flex h-[calc(100vh-72px)]">
        <div className="w-[300px] bg-emerald-700 overflow-y-auto custom-scroll">
          <div
            onClick={() => setInfo({ ...info, no: 1 })}
            className="mt-5 cursor-pointer">
            <img
              src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
              className="w-[150px] mx-auto"
              alt=""
            />
            <p className="text-center text-white mt-2">Folding Greeting</p>
          </div>
          <div
            onClick={() => { setInfo({ ...info, no: 2 }) }}
            className="mt-5 cursor-pointer">
            <img
              src={animation}
              alt=""
              className="w-[200px] mx-auto"
            />
            <p className="text-center text-white mt-2">Animation Greeting</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-no-repeat ">
          {
            info.no === 1 &&
            <BirthdayCard1 info={info} setInfo={setInfo} />
          }
          {
            info.no === 2 &&
            <BirthdayCard2 info={info} setInfo={setInfo} />
          }
          <button
            onClick={submitHandler}
            className='block mx-auto border px-8 py-2 rounded-md mt-5 text-sm text-white'
          >Publish</button>
        </div>
      </div>
      {showMessage &&
        <div
          onClick={() => setShowMessage(false)}
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

export default GreetingCard
