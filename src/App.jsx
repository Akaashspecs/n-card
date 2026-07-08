import { useState } from 'react'

import './App.css'
import MainPage from './MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>
      <MainPage/>
     </div>
    </>
  )
}

export default App
