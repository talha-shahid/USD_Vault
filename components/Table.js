import React, { useEffect } from "react";

function Table({ dark }) {
  console.log(`In table ${dark}`);
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className={`text-xs uppercase border-b border-t border-gray-300 ${
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
          <tr
            className={`border-b  dark:border-gray-300 ${
              dark === "true" ? "bg-gray-800 text-white hover:bg-gray-900" : "bg-white hover:bg-gray-100 text-black"
            }`}
          >
            <th className="py-4 px-6">1</th>
            <th
              scope="row"
              className={`py-4 px-6 font-medium  whitespace-nowrap ${
                dark === "true" ? "text-white" : "text-gray-900"
              }`}
            >
              Apple MacBook Pro 17"
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6 text-center">$2999</td>
            <td className="py-4 px-6">$2999</td>
          </tr>
          <tr
            className={`border-b dark:border-gray-300 ${
              dark === "true" ? "bg-gray-800 text-white hover:bg-gray-900" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            <th className="py-4 px-6">1</th>
            <th
              scope="row"
              className={`py-4 px-6 font-medium  whitespace-nowrap ${
                dark === "true" ? "text-white" : "text-gray-900"
              }`}
            >
              Microsoft Surface Pro
            </th>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">Laptop PC</td>
            <td className="py-4 px-6">$1999</td>
            <td className="py-4 px-6 text-center">
                $2999
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-300">
                <div className="bg-gray-500 h-2 rounded-full w-2/5"></div>
              </div>
            </td>

            <td className="py-4 px-6">$2999</td>
          </tr>
          <tr
            className={` border-b dark:border-gray-300 ${
              dark === "true" ? "bg-gray-800 text-white hover:bg-gray-900" : "bg-white text-black hover:bg-gray-100"
            } `}
          >
            <th className="py-4 px-6">1</th>
            <th
              scope="row"
              className={`py-4 px-6 font-medium  whitespace-nowrap ${
                dark === "true" ? "text-white" : "text-gray-900"
              }`}
            >
              Magic Mouse 2
            </th>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">$99</td>
            <td className="py-4 px-6 text-center">$2999</td>
            <td className="py-4 px-6">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
