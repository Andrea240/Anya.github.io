import { useState } from 'react'
import Home from './components/Home'
import Work from './components/Work'
import Finances from './components/Finances'
import Tasks from './components/Tasks'
import Navbar from './components/Navbar'
import './index.css'

export default function App() {
  const [section, setSection] = useState('home')
  const [stats, setStats] = useState({
    energy: 5,
    physical: 5,
    mental: 5,
    money: 1000,
  })
  const [tasks, setTasks] = useState([])

  const updateStat = (key, delta) => {
    setStats(s => ({
      ...s,
      [key]: s[key] + delta,
    }))
  }

  const addTask = (text) => {
    setTasks(t => [...t, { text, done: false }])
  }

  const toggleTask = (index) => {
    setTasks(t => t.map((task, i) => i === index ? { ...task, done: !task.done } : task))
  }

  const sections = {
    home: <Home stats={stats} />,
    work: <Work stats={stats} updateStat={updateStat} />,
    finances: <Finances stats={stats} />,
    tasks: <Tasks tasks={tasks} addTask={addTask} toggleTask={toggleTask} />,
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar current={section} setSection={setSection} />
      <main className="p-4">{sections[section]}</main>
    </div>
  )
}
