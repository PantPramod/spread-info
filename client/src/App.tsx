import { Route, Routes } from "react-router-dom"
import Home from './pages'
import Dashboard from "./pages/Dashboard"
// import NotFound from "./pages/NotFound"
import CardPage from "./pages/CardPage"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<CardPage/>}/>
     
    </Routes>
  )
}

export default App
