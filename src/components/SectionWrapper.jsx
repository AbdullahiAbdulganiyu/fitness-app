import React from "react";

export default function SectionWrapper({ children, header, title }) {
  return (
    <section className="min-h-screen flex flex-col gap-10">{children}</section>
  );
}
