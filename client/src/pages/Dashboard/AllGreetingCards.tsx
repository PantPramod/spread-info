// import React from 'react'

import axios from "axios"
import { useContext, useEffect, useState } from "react"
import baseUrl from "../../baseUrl"
import { GlobalContext } from "../../components/ContextProvider"
import { useNavigate } from "react-router-dom"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import { animation } from '../../assets'


const AllGreetingCards = () => {
    const [allCards, setAllCards] = useState<any>([])
    const { id, name } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${baseUrl}/api/birthday/userid/${id}`)
            console.log(data)
            setAllCards([...data])
        })()
    }, [])

    return (
        <Layout>
            <Header
                name={name}
                nav1="/dashboard/greeting-card"
                nav2="/dashboard/greeting-card/allcards"
            />
            <div className='relative bg-emerald-900 min-h-screen pt-10 flex-col sm:flex-row  flex flex-wrap gap-x-8 gap-y-8 w-[90%] mx-auto'>
                {allCards.map((card: any) => <div
                    onClick={() => navigate(`/dashboard/greeting/${card?._id}`)}
                    className="shadow-2xl bg-white rounded-md p-4 cursor-pointer" key={card._id}>
                    Id: {card._id}
                    {!card.no && <img src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png" alt="" className="w-[200px]" />}
                    {card.no == 1 && <img src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png" alt="" className="w-[200px]" />}
                    {card.no === 2 && <img src={animation} alt="" className="" />}
                </div>)}
            </div>
        </Layout>
    )
}

export default AllGreetingCards
