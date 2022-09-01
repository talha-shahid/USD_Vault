import React, { useEffect } from "react";

function Table({dark}) {
    console.log(`In table ${dark}`)
  return (
    
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className={`text-xs uppercase border-b dark:border-gray-400 ${dark==='true'? 'bg-gray-800 text-white':'bg-gray-200 text-black'}`}>
            <tr>
                <th scope="col" className="py-3 px-6">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Color
                </th>
                <th scope="col" className="py-3 px-6">
                    Category
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className={ `border-b  dark:border-gray-300 ${dark==='true'? 'bg-gray-800 text-white':'bg-white text-black'}`}>
                <th scope="row" className={`py-4 px-6 font-medium  whitespace-nowrap ${dark==='true'? 'text-white':'text-gray-900'}`}>
                    Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Laptop
                </td>
                <td className="py-4 px-6">
                    $2999
                </td>
            </tr>
            <tr className={`border-b dark:border-gray-300 ${dark==='true'? 'bg-gray-800 text-white':'bg-white text-black'}`}>
                <th scope="row" className={`py-4 px-6 font-medium  whitespace-nowrap ${dark==='true'? 'text-white':'text-gray-900'}`}>
                    Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">
                    White
                </td>
                <td className="py-4 px-6">
                    Laptop PC
                </td>
                <td className="py-4 px-6">
                    $1999
                </td>
            </tr>
            <tr className={` border-b dark:border-gray-300 ${dark==='true'? 'bg-gray-800 text-white':'bg-white text-black'} `}>
                <th scope="row" className={`py-4 px-6 font-medium  whitespace-nowrap ${dark==='true'? 'text-white':'text-gray-900'}`}>
                    Magic Mouse 2
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

  );
}

export default Table;
