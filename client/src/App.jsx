import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Booking from './components/Booking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Booking/>

    </>
  )
}

export default App
