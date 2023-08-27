// import React from 'react'

import axios from "axios"
import { useContext, useEffect, useState } from "react"
import baseUrl from "../../baseUrl"
import { GlobalContext } from "../../components/ContextProvider"
import { useNavigate } from "react-router-dom"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Card from "../../components/Card"

const AllCards = () => {
  const [allCards, setAllCards] = useState<any>([])
  const { id, name } = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${baseUrl}/api/info/userid/${id}`)
      console.log(data)
      setAllCards([...data])
    })()
  }, [])

  return (
    <Layout>
      <Header name={name} />
      <div className='bg-emerald-900 min-h-screen pt-10 flex-col sm:flex-row  flex flex-wrap gap-x-8 gap-y-8 w-[90%] mx-auto'>
        {
          allCards.map((card: any) => <Card
            info={card}
            OnClick={() => navigate(`/dashboard/${card._id}`)}
          />
          )
        }
      </div>
    </Layout>
  )
}

export default AllCards
