import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { GiConsoleController } from "react-icons/gi";

function Coins({ dark }) {
  const router = useRouter();
  // Fetch API Data
  const fetchApiData = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
      );
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  // console.log(coiins)
  const capitalize = (str) => {
    if (typeof str === "string") {
      return str.replace(/^\w/, (c) => c.toUpperCase());
    } else {
      return "";
    }
  };

  // console.log(router.query.coins);
  // console.log(data)
  return (
    <>
      <div
        className={`${dark === "true" ? "bg-slate-600" : "bg-gray-100"} p-4`}
      >
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className={`${
                  dark === "true" ? "text-gray-300" : "text-gray-600"
                } inline-flex items-center text-sm font-medium`}
              >
                CryptoCurrencies
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className={`${
                    dark === "true" ? "text-gray-300" : "text-gray-600"
                  } ml-1 text-sm font-medium md:ml-2`}
                >
                  Coins
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span
                  className={`ml-1 text-sm font-medium md:ml-2 ${
                    dark === "true" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {capitalize(router.query.coins)}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div
          className={`text-4xl font-semibold ${
            dark === "true" ? "text-white" : "text-gray-600"
          }`}
        >
          {capitalize(router.query.coins)}
        </div>
      </div>
    </>
  );
}

export default Coins;
