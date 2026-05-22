
const SearchBar = ({ value = '', onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        value={value}
        placeholder="Search kicks, drops, and brands"
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
