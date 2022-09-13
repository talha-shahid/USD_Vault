import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  console.log(useGlobalContext())
    const {search, searchPost} = useGlobalContext() 
  return (
    <>
        <div>
            <input type="text" placeholder="search" value={search} onChange={(e)=>{searchPost(e.target.value)}}/>
        </div>
    </>
  )
}

export default Search