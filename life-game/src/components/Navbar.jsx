export default function Navbar({ current, setSection }) {
  const items = [
    { id: 'home', label: 'Главная' },
    { id: 'work', label: 'Работа' },
    { id: 'finances', label: 'Финансы' },
    { id: 'tasks', label: 'Задачи' },
  ]

  return (
    <nav className="bg-blue-500 text-white p-2 flex gap-2">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => setSection(item.id)}
          className={
            'px-3 py-1 rounded ' +
            (current === item.id ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600')
          }
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
