import React, { useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

// import { useRouter } from "next/router";

const Coins = ({ dark, coin }) => {
  // console.log({ coin });

  const capitalize = (str) => {
    if (typeof str === "string") {
      return str.replace(/^\w/, (c) => c.toUpperCase());
    } else {
      return "";
    }
  };

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
                  {/* {capitalize(router.query.coins)} */}
                  {coin.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        {/* div 1 */}
        <div className="flex justify-between">
          <div className="flex items-center justify-start">
            {/* name and image */}
            <div
              className={`flex mt-6 ${
                dark === "true" ? "text-white" : "text-gray-900"
              }`}
            >
              <span>
                  <img src={coin.image.small} alt="" />
              </span>
              <span className="text-2xl md:text-4xl font-semibold  flex items-center justify-center ml-2">
                {coin.name}
              </span>
            </div>

            {/* button */}
            <div className="ml-2 mt-6">
              <span className=" bg-gray-300 text-gray-800 text-xs font-bold mr-2  px-2.5 py-1.5 rounded">
                {coin.symbol.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="flex pb-3">
            <div className="flex items-end mb-1 font-semibold text-2xl md:text-4xl">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </div>

            <div className="bg-red-600 mt-8  text-white font-semibold flex items-center p-1 ml-2 rounded-md">
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        </div>
        {/* div 2 */}

        <div className="flex justify-between mt-1.5">
          <div className="flex">
            <div className="bg-gray-400 mr-2 rounded-md flex items-center justify-center p-1">
              Rank #{coin.market_cap_rank}
            </div>
            <div className="bg-gray-300 hover:bg-gray-400 hover:underline rounded-md">
              <a href={coin.links.homepage[0]} className="flex p-1">
                <span className="flex items-center">
                  <AiOutlineLink />
                </span>
                <span>Website</span>
                <span className="flex items-center">
                  <BiLinkExternal />
                </span>
              </a>
            </div>
          </div>

          <div className="w-1/6 ">
            <div className="w-full rounded-full h-1.5 bg-gray-300">
              <div
                className="bg-gray-500 h-1.5 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="md:flex mt-3 md:h-40">
          <div className={`${dark === "true" ? "bg-gray-400" : "bg-gray-200"} md:w-1/4 mt-2 rounded-md shadow-md shadow-gray-500 mr-2 p-4 text-sm border border-gray-800`}>
            Market Cap{" "}
            <div className="font-semibold">
              {coin.market_data.market_cap.usd.toLocaleString()}
            </div>
          </div>

          <div className={`${dark === "true" ? "bg-gray-400" : "bg-gray-200"} md:w-1/4 mt-2 rounded-md shadow-md shadow-gray-500 mr-2 p-4 text-sm border border-gray-800`}>
            Fully Diluted Market Cap
            {coin.market_data.fully_diluted_valuation==undefined && <div className="font-semibold">
            {coin.market_data.fully_diluted_valuation.usd.toLocaleString()}
            </div>}
          </div>

          <div className={`${dark === "true" ? "bg-gray-400" : "bg-gray-200"} md:w-1/4 mt-2 rounded-md shadow-md shadow-gray-500 mr-2 p-4 text-sm border border-gray-800`}>
            Volume
            <div className="font-semibold">
              {coin.market_data.total_volume.usd.toLocaleString()}
            </div>
            <div className="mt-6">
              Volume/MarketCap
              <div className="font-semibold">
                {(
                  coin.market_data.total_volume.usd /
                  coin.market_data.market_cap.usd
                ).toFixed(4)}
              </div>
            </div>
          </div>

          <div className={`${dark === "true" ? "bg-gray-400" : "bg-gray-200"} md:w-1/4 mt-2 rounded-md shadow-md shadow-gray-500 mr-2  p-4 text-sm border border-gray-800`}>
            <div className="mt-3 font-semibold flex justify-between">
              <span>Circulating Supply:</span>$
              {coin.market_data.circulating_supply.toLocaleString()}
            </div>
            {coin.market_data.max_supply!=null &&
            <div className="mt-3 font-semibold flex justify-between">
              <span>Max Supply:</span>$
              {coin.market_data.max_supply.toLocaleString()}
            </div>
            }
            <div className="mt-3 font-semibold flex justify-between">
              <span>Total Supply:</span>$
              {coin.market_data.total_supply.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coins;

export async function getServerSideProps(context) {
  const id = context.query.coins;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  return {
    props: {
      coin: data,
    }, // will be passed to the page component as props
  };
}
