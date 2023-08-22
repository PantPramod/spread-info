import React, { useEffect, useState } from 'react'

type propTypes = {
    children: React.ReactNode,

}
type contextType = {
    name: string | null,
    email: string | null,
    id: string | null,
    setName: React.Dispatch<React.SetStateAction<string | null>>,
    setEmail: React.Dispatch<React.SetStateAction<string | null>>,
    setId: React.Dispatch<React.SetStateAction<string | null>>
}
export const GlobalContext = React.createContext<contextType>({
    name: '',
    email: '',
    id: '',
    setName: () => { },
    setEmail: () => { },
    setId: () => { }
})
const ContextProvider = ({ children }: propTypes) => {
    const [name, setName] = useState(localStorage.getItem('name') ? localStorage.getItem('name') : '')
    const [email, setEmail] = useState(localStorage.getItem('email') ? localStorage.getItem('email') : '')
    const [id, setId] = useState(localStorage.getItem('id') ? localStorage.getItem('id') : '')
    const data = {
        name,
        email,
        id,
        setName,
        setEmail,
        setId
    }
    useEffect(() => {
        if (id) {
            localStorage.setItem("id", id)
        }
    }, [id])
    useEffect(() => {
        if (name) {
            localStorage.setItem("name", name)
        }
    }, [name])
    useEffect(() => {
        if (email) {
            localStorage.setItem("email", email)
        }
    }, [email])
    return (
        <>
            <GlobalContext.Provider value={data}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

export default ContextProvider
