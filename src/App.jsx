import { useState } from 'react'

//Components
import Navbar from "./assets/components/Navbar"
import Offer from "./assets/components/Offer"
import Hero from "./assets/components/Hero"
import Button from "./assets/components/Button"
import Section from './assets/components/Section'
import Footer from './assets/components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Offer />
      <Hero />
      <Section />
      <Footer />
    </>
  )
}

export default App
