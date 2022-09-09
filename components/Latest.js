import React from 'react'

const Latest = (props) => {
  return (
    <div >
        <div className={` border-b  w-full flex flex-row py-2 text-xs overflow-auto ${
          props.dark === "true" ? "bg-gray-900 border-gray-700" : "bg-white "
        }`}>
            <div className='flex'>
                <span className={`pl-4  ${props.dark ==='true'?'text-gray-200':'text-black'}`}>Cryptos:&nbsp;</span>
                <span className='text-blue-600'>20,917</span>
            </div>
            <div className='flex'>
                <span className={`pl-4  ${props.dark ==='true'?'text-gray-200':'text-black'}`}>Exchanges:&nbsp;</span>
                <span className={`text-blue-600`}>515</span>
            </div>
            <div className='flex'>
                <span className={`pl-4  ${props.dark ==='true'?'text-gray-200':'text-black'}`}>Market&nbsp;Cap:&nbsp;</span>
                <span className='text-blue-600'>$1,034,857,146,420.834</span>
            </div>
            <div className='flex'>
                <span className={`pl-4  ${props.dark ==='true'?'text-gray-200':'text-black'}`}>24h&nbsp;Vol:&nbsp;</span>
                <span className='text-blue-600'>$88,747,799,457</span>
            </div>
            <div className='flex'>
                <span className={`pl-4  ${props.dark ==='true'?'text-gray-200':'text-black'}`}>Dominance:&nbsp;</span>
                <span className='text-blue-600'>BTC:&nbsp;38.8%&nbsp;ETH:&nbsp;20.1%</span>
            </div>
            <div className='flex'>
                <span className={`pl-4  ${props.dark ==='true'?'text-gray-200':'text-black'}`}>ETH&nbsp;Gas:&nbsp;</span>
                <span className='text-blue-600'>18&nbsp;Gwei</span>
            </div>

        </div>
    </div>
  )
}

export default Latest