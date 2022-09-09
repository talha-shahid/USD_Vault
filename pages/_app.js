import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Latest from "../components/Latest"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [dark, setDark] = useState('false')

  const darkMode =()=>{
    if(dark==='true'){setDark('false')}
    else{setDark('true')}
  }

  return <><Latest dark={dark}/><Navbar dark={dark} darkMode={darkMode}/><Component dark={dark}{...pageProps}/><Footer dark={dark}/></>
}

export default MyApp
