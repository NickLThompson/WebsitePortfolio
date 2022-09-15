import React, { useState } from "react";
import './style.css';

function App() {
  const [count] = useState(0);

  return (
    <main>
      <section>
        <h1>Welcome to my website!</h1>
        <p>this is where all my work stuff will be shown!</p>
      </section>

      <section>
        <h2>This is the 2nd part</h2>
        <p>not sure what to put here</p>
      </section>

      <section>
        <h3>alright just one more thing</h3>
        <p>filler text here honestly</p>
      </section>
      
    </main>
  );
}

export default App;