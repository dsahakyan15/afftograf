import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { Provider } from "react-redux"

import Welcome from "pages/Welcome"
import Footer from "widgets/Footer"
import Photo from "pages/Photo"
import Printing from "pages/Printing"
import Stamps from "pages/Stamps"
import WoodArt from "pages/WoodArt"
import Product from "pages/Product"
import { store } from "entities/redux/store"
import SignIn from "./pages/SignIn"
import Signed from "./pages/Signed"




const App = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/photo" element={<Photo />} />
          <Route path="/printing" element={<Printing />} />
          <Route path="/stamps" element={<Stamps />} />
          <Route path="/woodArt" element={<WoodArt />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signed" element={<Signed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App