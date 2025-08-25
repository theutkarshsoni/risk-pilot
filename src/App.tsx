import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>RiskPilot</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          No of clicks: {count}
        </button>
      </div>
    </>
  )
}

export default App
