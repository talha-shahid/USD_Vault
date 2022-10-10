import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Latest from "../components/Latest";
import { useState } from "react";


import { QueryClient, QueryClientProvider, useQuery } from "react-query";


function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();
  const [dark, setDark] = useState("false");


  // const [navres, setNavres] = useState(false);

  // const displayNav = () => {
  //   setNavres(!navres);
  // };

  const darkMode = () => {
    if (dark === "true") {
      setDark("false");
    } else {
      setDark("true");
    }
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="md:block hidden"><Latest dark={dark}/></div>
        <Navbar dark={dark} darkMode={darkMode}/>
        <Component dark={dark} {...pageProps} />
        <Footer dark={dark} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;