import React, { useState } from "react";

const Latest = (props) => {
  const [animation, setAnimation] = useState("running");
  return (
    <>
      <style jsx>{`
        @keyframes example {
          0% {
            transform: translate(-50%);
          }

          100% {
            transform: translate(100%);
          }
        }

        .idk {
          animation-name: example;
          animation-duration: 15s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-play-state: ${animation};
        }
      `}</style>
      <div
        onMouseEnter={() => setAnimation("paused")}
        onMouseLeave={() => setAnimation("running")}
        className={`border-b overflow-x-hidden flex ${
          props.dark === "true" ? " border-gray-700 bg-gray-900" : "bg-white"
        }`}
      >
        <div
          className={`idk   w-full flex flex-row py-2 text-xs ${
            props.dark === "true" ? "bg-gray-900 border-gray-700" : "bg-white "
          }`}
        >
          <div className="flex">
            <span
              className={`pl-4  ${
                props.dark === "true" ? "text-gray-200" : "text-black"
              }`}
            >
              Cryptos:&nbsp;
            </span>
            <span className="text-blue-600">20,917</span>
          </div>
          <div className="flex">
            <span
              className={`pl-4  ${
                props.dark === "true" ? "text-gray-200" : "text-black"
              }`}
            >
              Exchanges:&nbsp;
            </span>
            <span className={`text-blue-600`}>515</span>
          </div>
          <div className="flex">
            <span
              className={`pl-4  ${
                props.dark === "true" ? "text-gray-200" : "text-black"
              }`}
            >
              Market&nbsp;Cap:&nbsp;
            </span>
            <span className="text-blue-600">$1,034,857,146,420.834</span>
          </div>
          <div className="flex">
            <span
              className={`pl-4  ${
                props.dark === "true" ? "text-gray-200" : "text-black"
              }`}
            >
              24h&nbsp;Vol:&nbsp;
            </span>
            <span className="text-blue-600">$88,747,799,457</span>
          </div>
          <div className="flex">
            <span
              className={`pl-4  ${
                props.dark === "true" ? "text-gray-200" : "text-black"
              }`}
            >
              Dominance:&nbsp;
            </span>
            <span className="text-blue-600">
              BTC:&nbsp;38.8%&nbsp;ETH:&nbsp;20.1%
            </span>
          </div>
          <div className="flex">
            <span
              className={`pl-4  ${
                props.dark === "true" ? "text-gray-200" : "text-black"
              }`}
            >
              ETH&nbsp;Gas:&nbsp;
            </span>
            <span className="text-blue-600">18&nbsp;Gwei</span>
          </div>
        </div>

        {/* buttons */}
        <div
          className={`${
            props.dark === "true" ? "bg-gray-900" : "bg-white"
          } flex  z-50 absolute right-0`}
        >
          <div  className="mx-1 bg-blue-600 text-sm px-2 cursor-pointer my-1 flex justify-center items-center rounded text-white hover:bg-blue-500">
            Login
          </div>
          <div className="mx-1 bg-blue-600 text-sm px-2 cursor-pointer my-1 flex justify-center items-center rounded text-white hover:bg-blue-500 break">
            Sign&nbsp;Up
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
