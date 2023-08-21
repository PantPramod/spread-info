import { Route, Routes } from "react-router-dom"
import Home from './pages'
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import CardPage from "./pages/CardPage"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/:id" element={<CardPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
