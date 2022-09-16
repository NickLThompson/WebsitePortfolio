import React, { useState } from "react";
import './styles/style.css';

function App() {
  // useState();

  return (
    <main>
      <header className="header">
        <nav className="navbar">
          <ul>test</ul>
          <ul>test 2</ul>
          <ul>test 3</ul>
          <ul>test 4</ul>
        </nav>
      </header>
      
      <section className="section">
        <h1>Welcome to my website!</h1>
        <p>this is where all my work stuff will be shown!</p>
      </section>

      <section className="section">
        <h2>This is the 2nd part</h2>
        <p>not sure what to put here</p>
      </section>

      <section className="section">
        <h3>alright just one more thing</h3>
        <p>filler text here honestly</p>
      </section>

      
    </main>
  );
}

export default App;