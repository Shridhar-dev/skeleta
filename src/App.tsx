import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Skeleta from './components/Skeleta'

function App() {
  const 
  [count, setCount] = useState(0),
  [loading, setLoading] = useState(true);

  useEffect(()=>{
    
    let timer1 = setTimeout(()=>{
      setLoading(false)
     
    },10000)

    return () => {
      clearTimeout(timer1)
    }
    
  },[])

  
  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg"  className="logo s-image" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react s-yolo" alt="React logo" />
        </a>
      </div>
      <h1 className='s-text'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className="s-text">
          count is {count}
        </button>
        <p className='s-text'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs s-text">
        Click on the Vite and React logos to learn more
      </p>
      <Skeleta loading={loading}/>
    </div>
  )
}

export default App
