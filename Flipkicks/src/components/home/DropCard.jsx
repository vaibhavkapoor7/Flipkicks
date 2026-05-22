
const DropCard = ({ drop = {} }) => {
  return (
    <article className="drop-card">
      <div className="drop-card__image" />
      <div className="drop-card__content">
        <span className="drop-card__label">{drop.releaseDate || 'Release Date'}</span>
        <h3>{drop.title || 'Drop Title'}</h3>
        <p>{drop.subtitle || 'Limited edition sneaker release.'}</p>
      </div>
    </article>
  )
}

export default DropCard
