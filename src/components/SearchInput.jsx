import React from 'react'

export const SearchInput = ({query, setQuery}) => {
  return (
    <div>
        <label htmlFor="">filter show with </label>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  )
}
