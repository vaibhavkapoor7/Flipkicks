import React from 'react'

const FilterBar = ({ filters = [], onFilterChange }) => {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className="filter-bar__button"
          onClick={() => onFilterChange?.(filter)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
