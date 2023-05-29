import { useEffect, useRef, useState } from "react";
import "./App.css";

import Exnav from "./Ligiotec Solution/Exnav";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import SecondPage from "./Ligiotec Solution/SecondPage";

import Loding from "./Ligiotec Solution/Loding";
function App() {
  const containerRef = useRef(null);

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
        <main data-scroll-container ref={containerRef}>
          {loading ? (
            <Loding />
          ) : (
            <div>
              <Exnav />
              <SecondPage />
            </div>
          )}
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
