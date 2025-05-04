import React from "react";

export default function ExerciseCard({ excercise, index }) {
  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4 ">
        <h2 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{index + 1}
        </h2>
      </div>
    </div>
  );
}
