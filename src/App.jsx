import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-col justify-between items-center'>
      <div className='flex flex-grow items-center'>
        <p className='text-center'>Center Text</p>
      </div>
      <div className='flex justify-end items-end w-full'>
        <p className='text-right'>Right-Bottom Text</p>
      </div>
    </div>
  )
}

export default App
