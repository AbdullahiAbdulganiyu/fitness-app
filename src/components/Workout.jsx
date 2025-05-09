import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout({ workout }) {
  return (
    <SectionWrapper
      id="workout"
      header={"Welcome to "}
      title={["The ", "DANGER", " zone"]}
    >
      <div className="flex flex-col gap-4 ">
        {workout.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} i={index} key={index} />;
        })}
      </div>
    </SectionWrapper>
  );
}
