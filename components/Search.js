import React, { useState } from 'react'


const Search = (props) => {
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
      <input
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

    {/* <SearchedItems/> */}
  </>
  )
}

export default Search