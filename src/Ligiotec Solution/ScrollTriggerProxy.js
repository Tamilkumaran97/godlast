import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollTriggerProxy = () => {
  // first let's get instance of locomotive scroll
  const { Scroll } = useLocomotiveScroll();

  // Register scroll trigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (Scroll) {
      const element = Scroll?.el; // locomotive scrolling element , in our case it's app ( main)
      Scroll.on("scroll", ScrollTrigger.update); // on scroll locomotive , update scroll trigger

      // lets use scroller proxy

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? Scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : Scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => Scroll?.update);
      ScrollTrigger.refresh();
    };
  }, [Scroll]);

  return null;
};

export default ScrollTriggerProxy;
