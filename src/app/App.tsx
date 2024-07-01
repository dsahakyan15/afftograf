import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import './App.css'

import Welcome from "pages/Welcome"
import Footer from "widgets/Footer"
import Photo from "pages/Photo"
import Printing from "pages/Printing"
import Stamps from "pages/Stamps"
import WoodArt from "pages/WoodArt"




const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photo" element={<Photo />} />
        <Route path="/printing" element={<Printing/>} />
        <Route path="/stamps" element={<Stamps/>} />
        <Route path="/woodArt" element={<WoodArt/>} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App