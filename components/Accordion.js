import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example({dark}) {
    return (
        <Accordion allowMultipleExpanded allowZeroExpanded className={`${
            dark === "true" ? "bg-gray-900 text-white" : "bg-white"
          }`}>
            <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton>
                       <span className='font-bold p-0'>CryptoCurrencies</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='py-0 px-5 ' >
                    <ul>
                        <li className='text-xl flex pb-2 mt-2'><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg" className='pr-1 h-8'/> Ranking</li>
                        <li className='text-xl flex pb-2'><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg" className='pr-1 h-8'/>Recently Added</li>
                        <li className='text-xl flex pb-2 '><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg" className='pr-1 h-8'/>Categories</li>
                        <li className='text-xl flex pb-2 '><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg" className='pr-1 h-8'/>Spotlight</li>
                        <li className='text-xl flex pb-2 '><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg" className='pr-1 h-8'/>Gainers and Losers</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <span className='font-bold p-0 '>Exchanges</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='py-0 px-5'>
                <ul>
                        <li className='text-xl flex pb-2 pt-1'><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg" className='pr-1 h-8'/> Ranking</li>
                        <li className='text-xl flex pb-2'><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg" className='pr-1 h-8'/>Recently Added</li>
                        <li className='text-xl flex pb-2 '><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg" className='pr-1 h-8'/>Categories</li>
                        <li className='text-xl flex pb-2 '><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg" className='pr-1 h-8'/>Spotlight</li>
                        <li className='text-xl flex pb-2 '><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg" className='pr-1 h-8'/>Gainers and Losers</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}