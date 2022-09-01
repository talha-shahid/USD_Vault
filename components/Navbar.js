import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () =>{
  const [dark, setDark] = useState('true')

  const darkMode =()=>{
    console.log("clicked")
    if(dark==='true'){setDark('false')}
    else{setDark('true')}
  }

    return(
        <>
        
<nav className={` border-gray-200 px-2 sm:px-4 py-2.5 ${dark==='true'? 'bg-gray-900':'bg-white'} `}>
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        <span className={`self-center text-xl font-semibold whitespace-nowrap ${dark==='true'? 'text-white':'text-black'}`}>USD Vault</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className={`${dark==='true'? 'bg-gray-900':'bg-white'} flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700`}>
        {dark === 'true' && <li><BsFillSunFill size={'20px'} className="text-white cursor-pointer" onClick={darkMode}/></li>}
        {dark==='false' && <li><BsFillMoonFill size={'20px'} className="cursor-pointer" onClick={darkMode}/></li>}
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Home</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>About</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Services</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Pricing</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pr-4 pl-3 rounded md:p-0 hover:text-blue-600 ${dark==='true'? 'text-white font-semibold':'text-gray-800 font-semibold'}`}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
}
export default Navbar;