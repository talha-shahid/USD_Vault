/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaEthereum } from "react-icons/fa";


function Card({ dark, desc, heading }) {
  // console.log('desc')
  // console.log({desc})
  return (
    <div className="z-0 w-full m-2" >
      <div  className={`rounded-md drop-shadow-md border border-gray-300 p-5 ${
            dark === "true"
              ? "bg-gray-900 text-gray-50"
              : "bg-gray-200 text-black border border-gray-300"
          }`}>
        <div>

          <h2 className="text-lg font-semibold tracking-wide">
            {heading}
          </h2>
        </div>
        <div className="break-all">
        <p className={`  ${
            dark === "true"
              ? "text-gray-50"
              : "text-black"
          }`}>
          {desc}
        </p>
        </div>
          <ul className="list-decimal ml-10">
            <li className="text-base"><span className="font-semibold">PanCakeSwap</span></li>
            <li className="text-base"><span className="font-semibold">Ethereum</span></li>
            <li className="text-base"><span className="font-semibold">Shiba Inu</span></li>

          </ul>

      </div>
    </div>
  );
}

export default Card;
