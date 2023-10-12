import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)} className="count-button">
          Incrementar contador
        </button>
        <p className="count-text">
          Contador: <span className="count">{count}</span>
        </p>
        <p className="instruction">
          Edita <code>src/App.jsx</code> y guarda para probar HMR.
        </p>
      </div>
      <p className="read-the-docs">
        Haz clic en los logos de Vite y React para aprender más.
      </p>
    </div>
  );
}

export default App
