"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [showIframe, setShowIframe] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIframe(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={cn(
        "h-screen w-screen flex justify-center items-center bg-white",
        showIframe || "hidden"
      )}
    >
      {showIframe && (
        <iframe
          id="SVGmator__8ol65q1700968176607"
          frameBorder="0"
          src="https://www.svgmator.com/embed/boauCxUAD3mvNFv?onload=true&onclick=false&onhover=false"
        ></iframe>
      )}
    </div>
  );
};

export default Loader;
