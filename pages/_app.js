import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Latest from "../components/Latest"
import { useState } from 'react'



import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"

function MyApp({ Component, pageProps}) {
  const queryClient = new QueryClient()
  const [dark, setDark] = useState('false')
  const darkMode =()=>{
    if(dark==='true'){setDark('false')}
    else{setDark('true')}
  }

  return <><QueryClientProvider client={queryClient}><Latest dark={dark}/><Navbar dark={dark} darkMode={darkMode}/><Component dark={dark}{...pageProps}/><Footer dark={dark}/><ReactQueryDevtools position='bottom-right'/></QueryClientProvider></>
}

export default MyApp
