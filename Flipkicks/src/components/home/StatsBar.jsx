
const StatsBar = ({ stats = [] }) => {
  return (
    <section className="stats-bar">
      {stats.map((item) => (
        <div key={item.label} className="stats-bar__item">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  )
}

export default StatsBar
