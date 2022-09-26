import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import Card from "../components/Card";
import Table from "../components/Table";
import CallToAction from "../components/CallToAction";
import Swipe from "../components/Swipe";
import ScrollToTop from "react-scroll-to-top";
import {useQuery} from 'react-query'
import axios from 'axios'

const fetchCrypto = ()=>{
  return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false")
}

export default function Home({ dark, filteredCoins }) {


  const { isLoading, data} = useQuery(
    'crypto',fetchCrypto,
    {
      refetchInterval: 300000,
    }
  );

   



  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  //setting the width props
  let w = 3;
  // console.log(size.width)
  if (size.width <= 640) {
    w = 1;
  }



  return (
    <div>
      <Head>
        <title>USD Vault</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SearchT/>
      <Stories/> */}

      {/* modal */}


      <div
        className={`${
          dark === "true" ? "bg-slate-600 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="py-5">
          <Swipe w={w} />
        </div>
        <div
          className={`text-xl md:text-3xl font-bold mb-3 pt-3 ml-3 ${
            dark === "true" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Today's Cryptocurrency Prices by USD Vault
        </div>

        <div className="md:flex md:justify-center md:items-center p-5">
          <Card dark={dark} heading={"🔥Trending"} />
          <Card dark={dark} heading={"🕖Recently Added"} />
          <Card dark={dark} heading={"⭐Top Community Accounts"} />
        </div>
      </div>

      <Table dark={dark} data={data} filteredCoins={filteredCoins} />
      <div
        className={`${
          dark === "true" ? "border-y border-white" : "border-y border-gray-500"
        }`}
      >
        <CallToAction dark={dark} />
      </div>
      <ScrollToTop
        smooth
        className="flex justify-center items-center hover:bg-gray-200 "
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
