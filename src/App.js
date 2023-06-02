import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Router, Routes, route, useLocation } from "react-router-dom";

import Exnav from "./Ligiotec Solution/Exnav";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import SecondPage from "./Ligiotec Solution/SecondPage";

import Loding from "./Ligiotec Solution/Loding";
import ThirdPage from "./Ligiotec Solution/ThirdPage";
import ScrollTriggerProxy from "./Ligiotec Solution/ScrollTriggerProxy";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Ligiotec Solution/Navbar";
import Transition from "./Ligiotec Solution/Transition";
import HomeFirst from "./Ligiotec Solution/HomeFirst";
function App() {
  const containerRef = useRef(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <div className="App">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main className="App" data-scroll-container ref={containerRef}>
          {loading ? (
            <Loding />
          ) : (
            <>
              <AnimatePresence mode="wait">
                <Navbar />
                <Routes key={location.pathname} location={location}>
                  <Route path="/" element={<Exnav />} />
                  <Route path="/about" element={<ThirdPage />} />
                  <Route path="/contact" element={<SecondPage />} />
                </Routes>
              </AnimatePresence>
              {/*   <SecondPage /> */}

              {/*  <Transition /> */}
              {/*   <Exnav />
              <HomeFirst /> */}
            </>
          )}
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
