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
        <Header
          index={"01"}
          title={"Select your poison"}
          description={"Select the workout you wish to endure."}
        />
      </SectionWrapper>
    </div>
  );
}
