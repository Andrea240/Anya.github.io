export default function Work({ stats, updateStat }) {
  const addHour = () => {
    updateStat('money', 100)
    updateStat('energy', -1)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Работа</h2>
      <p className="mb-2">Баланс: {stats.money}₽</p>
      <button onClick={addHour} className="bg-green-500 text-white px-3 py-1 rounded">
        +1 час работы (+100₽, -1 энергия)
      </button>
    </div>
  )
}
