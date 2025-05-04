import React from "react";

export default function Button({ children, funct }) {
  return (
    <div>
      <button
        onClick={funct}
        className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200"
      >
        <p>{children}</p>
      </button>
    </div>
  );
}
