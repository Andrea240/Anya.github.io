export default function Home({ stats }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Главная</h2>
      <div className="grid grid-cols-2 gap-4">
        <Stat label="Энергия" value={stats.energy} />
        <Stat label="Физика" value={stats.physical} />
        <Stat label="Психика" value={stats.mental} />
        <Stat label="Финансы" value={stats.money + '₽'} />
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="p-2 bg-white rounded shadow">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  )
}
