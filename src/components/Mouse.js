import React, { useContext, useEffect, useRef } from "react";
import { themeContext } from "../Context/Theme";

const Mouse = () => {
  const { themeState } = useContext(themeContext);
  const circleRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({
    x: 0,
    y: 0,
  });
  const position = useRef({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handelMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handelMouse);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;
      if (dotRef.current && circleRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px,${mouse.current.y - 6}px,0)`;
        circleRef.current.style.transform = `translate3d(${position.current.x - 20}px,${position.current.y - 20}px,0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", handelMouse);
    };
  }, []);
  return (
    <div>
      <div
        ref={circleRef}
        className="circle fixed top-0 left-0 h-24 w-24 rounded-full z-[9999] border border-gray-100 bg-[#0d0d0d61] pointer-events-none transition-all duration-100 ease-in-out"
      ></div>
      <div
        ref={dotRef}
        className={`dot fixed top-0 left-0 h-6 w-6 rounded-full z-[9999] ${themeState.dark ? " bg-slate-100 border border-gray-100" : "bg-zinc-900 border border-slate-950"}  pointer-events-none transition-all duration-100 ease-in-out`}
      ></div>
    </div>
  );
};

export default Mouse;
