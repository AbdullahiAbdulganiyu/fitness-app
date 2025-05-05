import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout({ workout }) {
  return (
    <SectionWrapper header={"Welcome to "} title={["The ", "DANGER", " zone"]}>
      <div className="flex flex-col gap-4 ">
        {workout.map((exercise, index) => (
          <ExerciseCard exercise={exercise} index={index} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
