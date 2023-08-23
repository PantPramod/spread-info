import { Route, Routes } from "react-router-dom"
import Home from './pages'
import Dashboard from "./pages/Dashboard"
// import NotFound from "./pages/NotFound"
import CardPage from "./pages/CardPage"
import SelectUserType from "./pages/SelectUserType"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"
import AllCards from "./pages/Dashboard/AllCards"
import { useContext } from "react"
import { GlobalContext } from "./pages/ContextProvider"
import NotFound from "./pages/NotFound"

const App = () => {
  const { id } = useContext(GlobalContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/allcards" element={<AllCards />} />
      <Route path="/dashboard/:id" element={<CardPage />} />
      {!id &&
        <>
          <Route path="/select" element={<SelectUserType />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      }
      <Route path="/verifyemail" element={<VerifyEmail />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
