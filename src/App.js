import { useRef } from "react";
import "./App.css";

import Exnav from "./Ligiotec Solution/Exnav";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import SecondPage from "./Ligiotec Solution/SecondPage";
import ThirdPage from "./Ligiotec Solution/ThirdPage";

function App() {
  const containerRef = useRef(null);
  return (
    <div className="App">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
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
          <Exnav />
          <SecondPage />
          {/*  <ThirdPage /> */}
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
