import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>
        and accept all the risk of becoming the local
        <span className="text-blue-400 font-medium">mass montrosity</span>
        afflicted with sevre body dimorphia, unable to fit through doors.
      </p>

      <Button
        funct={() => {
          window.location.href = "#generate";
        }}
      >
        Accept & Begin
      </Button>
    </div>
  );
}
