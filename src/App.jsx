
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { useState } from 'react'
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx'

function App() {

   const [showLogin, setShowLogin] = useState(false)
   const location = useLocation();

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} showSearch={location.pathname === '/'}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
