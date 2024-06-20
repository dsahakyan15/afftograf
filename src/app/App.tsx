import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Welcome from "pages/Welcome"
import Footer from "widgets/Footer"
import Photo from "pages/Photo"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photo" element={<Photo />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App