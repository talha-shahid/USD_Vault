import React from "react";

const CallToAction = ({ dark }) => {
  return (
    <>
      <div
        className={` ${
          dark === "true" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              dark === "true" ? " text-white" : " text-black"
            } text-gray-900 sm:text-4xl`}
          >
            <span
              className={`block ${
                dark === "true" ? " text-gray-100" : " text-gray-800"
              }`}
            >
              Be the first to know about crypto news every day
            </span>
            <span className="block text-blue-600">Ready to dive in?</span>
          </h2>
          
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
