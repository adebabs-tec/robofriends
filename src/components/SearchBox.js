import React from 'react'

function SearchBox({ searchField, searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-green"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
