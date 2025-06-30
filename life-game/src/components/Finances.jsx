export default function Finances({ stats }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Финансы</h2>
      <p>Текущий баланс: {stats.money}₽</p>
    </div>
  )
}
