import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Task} from "@monorepo/typing";
function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(()=> {
    fetch("/api/task").then(response=> response.json()).then(setTasks);
  }, [])
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Express</h1>
      <div className="card">
        {tasks.map(task=> {
          return <div key={task.id}>
            <strong>{task.id}: </strong><span>{task.text}</span>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
