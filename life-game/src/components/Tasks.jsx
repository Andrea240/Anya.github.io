import { useState } from 'react'

export default function Tasks({ tasks, addTask, toggleTask }) {
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTask(text.trim())
    setText('')
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Задачи</h2>
      <form onSubmit={submit} className="mb-4 flex gap-2">
        <input
          className="border px-2 py-1 flex-grow"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Новая задача"
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" type="submit">
          Добавить
        </button>
      </form>
      <ul className="space-y-1">
        {tasks.map((task, i) => (
          <li key={i}>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={task.done} onChange={() => toggleTask(i)} />
              <span className={task.done ? 'line-through' : ''}>{task.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
