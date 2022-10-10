/*eslint-disable @next/next/no-img-element*/
import Link from "next/link";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Accordion from "./Accordion";
import Search from "./Search";

const Navbar = (props, {count}) => {
  const [dropDown, setDropDown] = useState(false);
  const [navres, setNavres] = useState(false);
  const [search, setSearch] = useState(false);
  // const [count, setCount] = useGlobalState('count');

  const displayNav = () => {
    setNavres(!navres);
    if(count==false){
      setCount(true)
    }
    else if (count== true) {
      setCount(false)
    }

  };

  const displaySearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <nav
        className={`sticky md:relative top-0 z-50 border-gray-200 px-2 sm:px-4 py-2.5 drop-shadow-md  ${
          props.dark === "true" ? "bg-gray-900" : "bg-white"
        } `}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a>
              <div className="flex flex-row">
                <span className="flex justify-center items-center mr-1 bg-white rounded-full border border-black">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png"
                    className="h-9 ml-0.5 p-1"
                    alt="Logo"
                  />
                </span>
                <span
                  className={`self-center text-2xl leading-10 font-semibold whitespace-nowrap font-pacifico tracking-wider ${
                    props.dark === "true" ? "text-white" : "text-black"
                  }`}
                >
                  UsdVault
                </span>
              </div>
            </a>
          </Link>

          {/* hamburger */}
          {/* <button onClick={displayNav} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button> */}

          {navres === false ? (

              <span
                className={` border border-black md:border-0 rounded p-1 ${
                  props.dark === "true"
                    ? "bg-white md:bg-transparent"
                    : "bg-gray-900 md:bg-transparent"
                }`}
              >
                <GiHamburgerMenu
                  className={`md:hidden cursor-pointer ${
                    props.dark === "true" ? "text-black" : "text-white"
                  } `}
                  onClick={displayNav}
                  size={20}
                />
              </span>

          ) : (
            <AiFillCloseCircle
              onClick={displayNav}
              size={20}
              className={`drop-shadow cursor-pointer  ${
                props.dark === "true"
                  ? "text-white border border-white rounded-full"
                  : "text-black border border-black rounded-full"
              }`}
            />
          )}

          {/* <AiOutlineCloseCircle onClick={displayNav}/> */}

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className={`${
                props.dark === "true" ? "bg-gray-900" : "bg-white"
              } flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700`}
            >
              {props.dark === "true" && (
                <li>
                  <BsFillSunFill
                    size={"20px"}
                    className="text-white cursor-pointer hover:text-blue-600"
                    onClick={props.darkMode}
                  />
                </li>
              )}
              {props.dark === "false" && (
                <li className="hover:text-blue-600">
                  <BsFillMoonFill
                    size={"20px"}
                    className="cursor-pointer "
                    onClick={props.darkMode}
                  />
                </li>
              )}
              <li>
                <span
                  onMouseOver={() => {
                    setDropDown(true);
                  }}
                  onMouseLeave={() => {
                    setDropDown(false);
                  }}
                >
                  <a
                    href="#"
                    className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${
                      props.dark === "true"
                        ? "text-white font-semibold"
                        : "text-gray-800 font-semibold"
                    }`}
                  >
                    CryptoCurrencies
                  </a>

                  {dropDown && (
                    <div className=" absolute top-13 right-30 bg-gray-100  rounded-md p-5 w-1/4 z-50">
                      {/* <div className=" bg-gray-100 transform w-9 h-6 relative -mt-1 -top-5 rounded-sm rotate-45 "></div> */}
                      <ul>
                        <Link href={"/myaccount"}>
                          <a>
                            <li className="text-base flex pb-2 pt-1">
                              <img
                                src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"
                                className="pr-1 h-8"
                                alt="img"
                              />{" "}
                              Ranking
                            </li>
                          </a>
                        </Link>
                        <Link href={"/orders"}>
                          <a>
                            <li className="text-base flex pb-2">
                              <img
                                src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg"
                                className="pr-1 h-8"
                              />
                              Recently Added
                            </li>
                          </a>
                        </Link>
                        <li className="text-base flex pb-2 ">
                          <img
                            src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg"
                            className="pr-1 h-8"
                          />
                          Categories
                        </li>
                      </ul>
                    </div>
                  )}
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${
                    props.dark === "true"
                      ? "text-white font-semibold"
                      : "text-gray-800 font-semibold"
                  }`}
                >
                  Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${
                    props.dark === "true"
                      ? "text-white font-semibold"
                      : "text-gray-800 font-semibold"
                  }`}
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${
                    props.dark === "true"
                      ? "text-white font-semibold"
                      : "text-gray-800 font-semibold"
                  }`}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pr-4 pl-3 rounded md:p-0  hover:text-blue-600 ${
                    props.dark === "true"
                      ? "text-white font-semibold"
                      : "text-gray-800 font-semibold"
                  }`}
                >
                  Learn
                </a>
              </li>

              <li
                onClick={displaySearch}
                className={` ${
                  props.dark === "true" ? "text-white" : "text-black"
                } ${
                  search == true ? "bg-gray-300 text-black" : "bg-transparent"
                } hover:cursor-pointer hover:bg-gray-300 hover:text-blue-600 rounded-full p-3 -mt-2`}
              >
                <BsSearch />
              </li>
            </ul>

            {search && <Search dark={props.dark} searchF={displaySearch} />}
          </div>
        </div>
      </nav>

      <div
        className={`h-screen w-full z-50 top-14 ${
          props.dark === "true" ? "bg-gray-900 text-white" : "bg-white"
        } ${navres === true ? "fixed" : "hidden"}`}
      >

        <div className="md:hidden block">

        <div className="flex">
        <div className=" w-12 flex items-center justify-center p-5 rounded-full">
          {props.dark === "true" && (
            <li className="list-none bg-gray-400 p-2 rounded-full">
              <BsFillSunFill
                size={"20px"}
                className="text-white cursor-pointer hover:text-blue-600"
                onClick={props.darkMode}
              />
            </li>
          )}

          {props.dark === "false" && (
            <li className="hover:text-blue-600 list-none bg-gray-400 p-2 rounded-full">
              <BsFillMoonFill
                size={"20px"}
                className="cursor-pointer "
                onClick={props.darkMode}
              />
            </li>
          )}
        </div>

        <div className="flex items-center">
          <Search dark={props.dark}/>
        </div>
        </div>

        </div>

        <Accordion dark={props.dark} />
      </div>
    </>
  );
};
export default Navbar;
