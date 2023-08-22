import { Route, Routes } from "react-router-dom"
import Home from './pages'
import Dashboard from "./pages/Dashboard"
// import NotFound from "./pages/NotFound"
import CardPage from "./pages/CardPage"
import SelectUserType from "./pages/SelectUserType"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<CardPage />} />
      <Route path="/select" element={<SelectUserType />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verifyemail" element={<VerifyEmail/>} />
    </Routes>
  )
}

export default App
