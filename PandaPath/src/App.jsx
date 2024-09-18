import { useState } from 'react'
import './App.css'
import HeroSection from './components/ui/HeroSection'
import Navbar from './components/ui/navbar'
import AboutUs from './components/ui/AboutUs'



function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>

    </>
  )
}

export default App
