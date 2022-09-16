import React, { useState } from "react";
import "./components/navbar"
import './styles/style.css';

function App() {
  // useState();

  return (
    <main>
      <section className="section1">
        <h1>Welcome to my website!</h1>
        <p>this is where all my work stuff will be shown!</p>
      </section>

      <section className="section2">
        <h2>This is the 2nd part</h2>
        <p>not sure what to put here</p>
      </section>

      <section className="section3">
        <h3>alright just one more thing</h3>
        <p>filler text here honestly</p>
      </section>
      
    </main>
  );
}

export default App;