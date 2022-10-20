import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/Table.module.css";
import Link from 'next/link'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai' 
// import axios from 'axios'
// import { useQuery } from "react-query";
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const fetchCrypto = ()=>{
//   return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false")
// }


function Table({ dark, filteredCoins}) {
  //States
  const [order, setOrder] = useState('ASD')
  const [coins, setCoins] = useState(filteredCoins)
  const [slicedCoins, setSlicedCoins] = useState(filteredCoins.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const [count0, setCount0] = useState(0)
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
  const [count5, setCount5] = useState(0)
  const [count6, setCount6] = useState(0)

  const [id, setId] = useState(null)
  


  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;
  const pageCount = Math.ceil(slicedCoins.length / coinsPerPage);

  //React Query
  // const { isLoading, data} = useQuery(
  //   'crypto',fetchCrypto,
  //   {
  //     refetchInterval: 300000,
  //   }
  // );

  //Graph Image
  const graphImage ='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg'

  //Sorting
  const sorting = (col)=>{
    console.log("sorting is clicked")
    if (order ==='ASD'){
      const sorted = [...coins].sort((a,b)=>
        a[col] > b[col] ? 1 : -1
      )
      setCoins(sorted);
      setOrder('DSC')
    }

    if (order ==='DSC'){
      const sorted = [...coins].sort((a,b)=>
        a[col] < b[col] ? 1 : -1
      )
      setCoins(sorted);
      setOrder('ASD')
    }
  }

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // if(isLoading){
  //   return <>
  //   <div><Skeleton height={40}/></div>
  //   <div><Skeleton count={10} height={30}/>
  //   </div>  </>
  // }

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
              <th onClick={()=>{sorting("market_cap_rank"); setCount0(count0 + 1); setId(0)}} scope="col" className="py-3 px-6 cursor-pointer">
                <span className="flex">
                #
                {count0 != 0 && count0%2 != 0 && id===0 && <AiFillCaretUp className="mt-0.5"/>}
                {count0 != 0 && count0%2 == 0 && id===0 && <AiFillCaretDown className="mt-0.5"/>}
                </span>
              </th>
              <th onClick={()=>{sorting("name"); setCount(count + 1); setId(1)}} scope="col" className="py-3 px-6 cursor-pointer" id="table-head-name">
                <span className="flex">Name 
                {count != 0 && count%2 != 0 && id===1 && <AiFillCaretUp className="mt-0.5"/>}
                {count != 0 && count%2 == 0 && id===1 && <AiFillCaretDown className="mt-0.5"/>}
                </span>
              </th>
              <th onClick={()=>{sorting("current_price"); setCount2(count2 + 1); setId(2)}} scope="col" className="py-3 px-6 cursor-pointer">
                <span className="flex">Price
                {count2 != 0 && count2%2 != 0 && id===2 && <AiFillCaretUp className="mt-0.5"/>}
                {count2 != 0 && count2%2 == 0 && id===2 && <AiFillCaretDown className="mt-0.5"/>}
                </span>
              </th>
              <th onClick={()=>{sorting("price_change_percentage_24h"); setCount3(count3 + 1); setId(3)}} scope="col" className="py-3 px-6 text-center cursor-pointer">
                <span className="flex">24h 
                {count3 != 0 && count3%2 != 0 && id===3 && <AiFillCaretUp className="mt-0.5"/>}
                {count3 != 0 && count3%2 == 0 && id===3 && <AiFillCaretDown className="mt-0.5"/>}
                </span>
              </th>
              <th onClick={()=>{sorting("market_cap"); setCount4(count4 + 1); setId(4)}} scope="col" className="py-3 px-6 text-center cursor-pointer">
                <span className="flex">Market Cap
                {count4 != 0 && count4%2 != 0 && id===4 && <AiFillCaretUp className="mt-0.5"/>}
                {count4 != 0 && count4%2 == 0 && id===4 &&<AiFillCaretDown className="mt-0.5"/>}
                </span>
              </th>
              <th onClick={()=>{sorting("total_volume"); setCount5(count5 + 1); setId(5)}} scope="col" className="py-3 px-6 text-center cursor-pointer">
                <span className="flex">Volume
                {count5 != 0 && count5%2 != 0 && id===5 && <AiFillCaretUp className="mt-0.5"/>}
                {count5 != 0 && count5%2 == 0 && id===5 &&<AiFillCaretDown className="mt-0.5"/>}
                </span>
              </th>
              <th onClick={()=>{sorting("circulating_supply"); setCount6(count6 + 1); setId(6)}} scope="col" className="py-3 px-6 text-center cursor-pointer">
                <span className="flex">Circulating Supply
                {count6 != 0 && count6%2 != 0 && id===6 &&<AiFillCaretUp className="mt-0.5"/>}
                {count6 != 0 && count6%2 == 0 && id===6 &&<AiFillCaretDown className="mt-0.5"/>}
                </span>
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Graph
              </th>
            </tr>
          </thead>

          <tbody>
            {coins
              .slice(pagesVisited, pagesVisited + coinsPerPage)
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
                      {/* <span>{console.log(count)}</span> */}
                      {/* <span>{console.log(index)}</span> */}
                      {/* <span>{console.log(data.data[index+1].current_price > data.data[index].current_price)}</span> */}
                    </div>
                  </th>
                  <td className="py-4 px-6">
                    <b>${coin.current_price.toLocaleString()}</b>
                  </td>
                  {coin.price_change_percentage_24h.toFixed(2)>0 && <td className="flex text-green-600 font-semibold py-4 px-6">
                  <AiFillCaretUp className="mt-1 mr-1"/>{coin.price_change_percentage_24h.toFixed(2)}%
                  </td>}
                  {coin.price_change_percentage_24h.toFixed(2)<0 && <td className="flex text-red-600 font-semibold py-4 px-6">
                  <AiFillCaretDown className="mt-1 mr-1"/>{coin.price_change_percentage_24h.toFixed(2)}%
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
                  <td className="md:px-2 md:py-2">
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
