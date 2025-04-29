import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Generator() {
  return (
    <div>
      <SectionWrapper
        header={"genrate your workout"}
        title={["it's", "huge", "o'clock"]}
      >
        section wrapper
      </SectionWrapper>
    </div>
  );
}
