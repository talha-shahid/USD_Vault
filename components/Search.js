import React, { useState, useRef, useEffect } from 'react'


const Search = (props) => {

  const reff = useRef();
  const [hide, setHide] = useState('hidden')
  const [searchTerm, setSearchTerm] = useState("")

  const [users, setUsers] = useState([])

  // console.log(searchTerm)

  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  const gettingValue =(e)=>{
    setSearchTerm(reff.current.value)
    if(reff.current.value != ""){
      setHide('block')
    }
    else{
      setHide('hidden')
    }
  }

  return (
    <>
    <form>
    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-normal text-gray-900 sr-only dark:text-gray-300"
    >
      Search
    </label>
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input ref={reff} onChange={gettingValue}
        type="search"
        id="default-search"
        className={`${props.dark === "true"? 'bg-gray-700 text-white placeholder-gray-300':'bg-gray-200 text-black placeholder-gray-600'} block py-1.5 pl-10 w-full text-sm rounded-lg border border-gray-500 outline-offset-1 "
        ` } placeholder="Search"
        required
      />
      <button
        type="submit"
        className="text-white absolute right-1 top-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-0.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-gray-500"
      >
        Search
      </button>
    </div>
  </form>

  <div className={`${hide} absolute top-30 mt-1 drop-shadow bg-gray-300 w-96 px-10 py-3 rounded-md`}>
  {users.filter((val)=>{
    if(searchTerm == ""){
      return val
    }
    else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    }

    }).map((val, key)=>{
      return(
        <div key={val.id}>{val.name}</div>
      )
    })}

  </div>

  </>
  )
}

export default Search
