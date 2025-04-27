import React from "react";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
}

export default App;
