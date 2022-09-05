import Link from "next/link";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = (props) =>{
  console.log(`In Navbar ${props.dark}`)
  const [dropDown, setDropDown] = useState(false)

    return(
        <>
        
<nav className={`relative z-50 border-gray-200 px-2 sm:px-4 py-2.5 drop-shadow-md ${props.dark==='true'? 'bg-gray-900':'bg-white'} `}>
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link href="/"><a>
      <div className="flex flex-row">
        <span className="bg-white rounded-full p-1 mr-1 border border-black">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png" className="h-6 sm:h-9 ml-0.5" alt="Logo"/>
        </span>
        <span className={`self-center text-2xl leading-10 font-semibold whitespace-nowrap font-pacifico tracking-wider ${props.dark==='true'? 'text-white':'text-black'}`}>UsdVault</span>
        </div>
        </a>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className={`${props.dark==='true'? 'bg-gray-900':'bg-white'} flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700`}>
        {props.dark === 'true' && <li><BsFillSunFill size={'20px'} className="text-white cursor-pointer " onClick={props.darkMode}/></li>}
        {props.dark==='false' && <li ><BsFillMoonFill size={'20px'} className="cursor-pointer " onClick={props.darkMode}/></li>}
        <li>


          <span onMouseOver={()=>{setDropDown(true)}} onMouseLeave={()=>{setDropDown(false)}}>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${props.dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>CryptoCurrencies</a>
        {dropDown && <div className=" absolute top-14 right-30 bg-gray-100  rounded-md p-5 w-36">
          <div className=" bg-gray-100 transform w-9 h-6 absolute -mt-1 top-0 rounded-sm  right-16 rotate-45 "></div>
          <ul>
            <Link href={"/myaccount"}><a><li className="font-semibold py-2 hover:text-blue-600 hover:cursor-pointer">Gainers And Losers</li></a></Link>
            <Link href={"/orders"}><a><li className="font-semibold py-2 hover:text-blue-600 hover:cursor-pointer">Orders</li></a></Link>
            <li className="font-semibold py-2 hover:text-blue-600 hover:cursor-pointer">Logout</li>
          </ul>
        </div>}
        </span>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${props.dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Exchanges</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${props.dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Community</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${props.dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Products</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0  hover:text-blue-600 ${props.dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Learn</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
}
export default Navbar;