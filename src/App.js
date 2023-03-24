import React from 'react'
import "./App.css"
import Home from './componets/Home/Home'
import Main from './componets/Main/Main'
import Navbar from './componets/Navbar/Navbar'
import Footer from './componets/Footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App