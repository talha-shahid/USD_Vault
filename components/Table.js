import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import { UserData } from "./Data";

function Table({ dark, filteredCoins }) {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <>
      <style jsx>{`
        table tbody th {
          position: sticky;
          left: 0;
          z-index: 1;
        }

        table tbody tr:hover > th {
          background: ${dark === "true" ? "#111827" : "#e2e8f0"};
        }
      `}</style>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            className={`text-xs uppercase border-b border-t border-gray-300  ${
              dark === "true"
                ? "bg-gray-500 text-white border-y border-white"
                : "bg-gray-200 text-black border-y border-gray-500"
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
              <th scope="col" className="py-3 px-6 text-center">
                Graph
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => (
              <tr
                key={coin.id}
                className={`border-b  dark:border-gray-300 ${
                  dark === "true"
                    ? " text-white bg-gray-800 hover:bg-gray-900"
                    : " text-black bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <th
                  className={`py-4 px-6 ${
                    dark === "true"
                      ? "text-white bg-gray-800"
                      : "text-black bg-gray-100"
                  }`}
                >
                  {coin.market_cap_rank}
                </th>
                <th
                  scope="row"
                  className={`py-4 px-6 font-medium  whitespace-nowrap  ${
                    dark === "true"
                      ? "text-white bg-gray-800"
                      : "text-gray-900 bg-gray-100"
                  }`}
                >
                  <div className="flex">
                    <img width={22} src={coin.image} />
                    <span className="ml-2">
                      <b>{coin.name}</b>
                    </span>
                    <span className="text-gray-500 ml-1">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </div>
                </th>
                <td className="py-4 px-6">
                  <b>${coin.current_price.toLocaleString()}</b>
                </td>
                <td className="py-4 px-6">
                  ${coin.market_cap.toLocaleString()}
                </td>
                <td className="py-4 px-6">
                  ${coin.total_volume.toLocaleString()}
                </td>
                <td className="py-4 px-6 text-center">
                  {coin.circulating_supply.toLocaleString()}{" "}
                  <span className="font-medium">
                    {coin.symbol.toUpperCase()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  {" "}
                  <LineChart chartData={userData} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
