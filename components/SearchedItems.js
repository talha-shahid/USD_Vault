import React from 'react'

const SearchedItems = ({filteredCoins}) => {
  return (
    <div className='absolute top-30 right-20 bg-red-400 w-48 z-40'>{filteredCoins.map((coin) => (<ul><li>{coin.name}</li></ul>))}</div>
  )
}

export default SearchedItems