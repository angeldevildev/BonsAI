import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Sketch from './components/Sketch/Sketch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Sketch />
      </div>
    </>
  )
}

export default App
