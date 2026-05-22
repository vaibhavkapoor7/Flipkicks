import DropCard from './DropCard'

const HotDrops = ({ drops = [] }) => {
  return (
    <section className="hot-drops">
      <h2>Hot Drops</h2>
      <div className="hot-drops__grid">
        {drops.map((drop) => (
          <DropCard key={drop.id} drop={drop} />
        ))}
      </div>
    </section>
  )
}

export default HotDrops
