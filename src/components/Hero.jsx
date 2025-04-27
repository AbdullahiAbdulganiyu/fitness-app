import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
      <p>IT'S TIME TO GET</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Swole<span>normous</span>
      </h1>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>
        and accept all the risk of becoming the local
        <span className="text-blue-400 font-medium">mass montrosity</span>
        afflicted with sevre body dimorphia, unable to fit through doors.
      </p>
    </div>
  );
}
