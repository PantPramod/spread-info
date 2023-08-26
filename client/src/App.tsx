import { Route, Routes } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "./components/ContextProvider"
import Home,
{
  Login,
  NotFound,
  SelectUserType,
  VerifyEmail,
  Signup
} from './pages'
import Dashboard,
{
  AllCards,
  BusinessCard,
  CardPage,
  GreetingCard,
  Resume,
  UploadedCard
} from "./pages/Dashboard"
import Greeting from "./pages/Dashboard/Greeting"
import AllGreetingCards from "./pages/Dashboard/AllGreetingCards"


const App = () => {
  const { id } = useContext(GlobalContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/allcards" element={<AllCards />} />
      <Route path="/dashboard/business-card" element={<BusinessCard />} />
      <Route path="/dashboard/greeting-card" element={<GreetingCard />} /> 
      <Route path="/dashboard/greeting-card/allcards" element={<AllGreetingCards/>} />
      <Route path="/dashboard/uploaded-card" element={<UploadedCard />} />
      <Route path="/dashboard/resume" element={<Resume />} />
      <Route path="/dashboard/:id" element={<CardPage />} />
      <Route path="/dashboard/greeting/:id" element={<Greeting />} />
      {!id &&
        <>
          <Route path="/select" element={<SelectUserType />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      }
      <Route path="/verifyemail" element={<VerifyEmail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
