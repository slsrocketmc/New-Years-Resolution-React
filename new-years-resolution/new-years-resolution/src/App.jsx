import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="content">
      <div className="control widget"></div>
      <div className="widget"></div>
      <div className="widget"></div>
    </div>
    </>
  )
}

export default App
