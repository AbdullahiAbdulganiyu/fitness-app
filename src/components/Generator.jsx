import React from "react";
import SectionWrapper from "./SectionWrapper";

function Header({ index, title, description }) {
  return (
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default function Generator() {
  return (
    <div>
      <SectionWrapper
        header={"genrate your workout"}
        title={["it's ", "huge", " o'clock"]}
      >
        section wrapper
      </SectionWrapper>
    </div>
  );
}
