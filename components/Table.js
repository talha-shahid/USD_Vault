import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/Table.module.css";
import Link from 'next/link'
import axios from 'axios'
import { useQuery } from "react-query";

function Table({ dark, filteredCoins, data}) {


  const graphImage ='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg'


  const [users, setUsers] = useState(filteredCoins.slice(0, 100));
  // const [users, setUsers] = useState(filteredCoins);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <style jsx>{`

        table thead #table-head-name{
          position: sticky;
          left: 0;
          background: ${dark === "true" ? "#6b7280" : "#e2e8f0"}
        }

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
              <th scope="col" className="py-3 px-6" id="table-head-name">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                24h
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
            {data?.data
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((coin) => (
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
                      <span className="ml-2 hover:text-blue-600 hover:underline">
                        <b><Link href={`/currencies/${coin.id}`}>{coin.name}</Link></b>
                      </span>
                      <span className="text-gray-500 ml-1">
                        {coin.symbol.toUpperCase()}
                      </span>
                    </div>
                  </th>
                  <td className="py-4 px-6">
                    <b>${coin.current_price.toLocaleString()}</b>
                  </td>
                  {coin.price_change_percentage_24h.toFixed(2)>0 && <td className="text-green-600 font-semibold py-4 px-6">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>}
                  {coin.price_change_percentage_24h.toFixed(2)<0 && <td className="text-red-600 font-semibold py-4 px-6">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>}
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
                    <img src={graphImage}></img>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>


      <div
        className={`pt-5 flex items-center justify-center overflow-x-hidden  ${
          dark === "true" ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <ReactPaginate 
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>

    </>
  );
}

export default Table;
