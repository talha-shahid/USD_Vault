import React, { useEffect } from "react";

function Table({ dark, filteredCoins }) {
  console.log(`In table ${dark}`);
  return (<>
    <style jsx>{`
table tbody th {
  position: sticky;
  left: 0;
  z-index: 1;
}

table tbody tr:hover > th{
  background: #f3f4f6
}
      `}</style>
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className={`text-xs uppercase border-b border-t border-gray-300  ${
            dark === "true"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          <tr>
          <th scope="col" className="py-3 px-6">
              #
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Market Cap
            </th>
            <th scope="col" className="py-3 px-6">
              Volume
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Circulating Supply
            </th>
            <th scope="col" className="py-3 px-6">
              Graph
            </th>
          </tr>
        </thead>
        <tbody>
        {filteredCoins.map(coin => {
          return<>
          <tr
            className={`border-b  dark:border-gray-300 ${
              dark === "true" ? "bg-gray-800 text-white hover:bg-gray-900" : "bg-white hover:bg-gray-100 text-black"
            }`}
          >
            <th className="py-4 px-6">{coin.market_cap_rank}</th>
            <th
              scope="row"
              className={`py-4 px-6 font-medium  whitespace-nowrap  ${
                dark === "true" ? "text-white bg-gray-800" : "text-gray-900 bg-white"
              }`}
            ><div className="flex"><img width={22} src={coin.image}/>
              <b>{coin.name}</b></div>
            </th>
            <td className="py-4 px-6"><b>${coin.current_price.toLocaleString()}</b></td>
            <td className="py-4 px-6">${coin.market_cap.toLocaleString()}</td>
            <td className="py-4 px-6">${coin.total_volume.toLocaleString()}</td>
            <td className="py-4 px-6 text-center">{coin.circulating_supply.toLocaleString()}{" "}<span className="font-medium">{coin.symbol.toUpperCase()
}</span></td>
            <td className="py-4 px-6">graph</td>
          </tr></>})}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Table;

