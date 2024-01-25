import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
// import YourMainComponent from './Component/Y'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    {/* <YourMainComponent /> */}
    </>
  )
}

export default App
