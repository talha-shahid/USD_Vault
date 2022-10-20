import React, { useState, useEffect } from "react";
import Link from "next/link";

const SearchMobile = ({ searchHidden, hideSearch }) => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetchingData();
  }, []);

  const fetchingData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrency(data);
      });
  };

  const getValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={`${searchHidden} fixed -mt-14 z-50 h-screen  w-full bg-white`}>

      <form className="bg-gray-200 -mt-1 py-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-normal text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="flex justify-between ">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              className="ml-5 w-5 h-5 text-gray-500 dark:text-gray-400"
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
            autoComplete="off"
            onChange={getValue}
            type="search"
            id="default-search"
            className={`ml-5 block py-1.5 pl-10 w-full text-sm rounded-lg border border-gray-500 outline-offset-1 "
        `}
            placeholder="Search"
            required
          />
        </div>

        <div className=" bg-gray-200 px-2 rounded-lg mr-3 flex items-center justify-center font-semibold border-2 border-gray-500 z-50" onClick={hideSearch}>Cancel</div>

        </div>

      </form>

      <div className="h-screen mx-4 my-2 overflow-scroll">
        {currency
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div key={val.id}>
                <span className="hover:text-blue-600 " >
                  <Link href={`/currencies/${val.id}`}>
                    <a >
                      <div className="flex " onClick={hideSearch}>
                        <img className="mr-2 mb-2" width="25" src={val.image} />
                        {val.name}
                      </div>
                    </a>
                  </Link>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchMobile;
