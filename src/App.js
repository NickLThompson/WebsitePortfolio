import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import './styles/style.css';


function App() {
  // useState();

  return (
    <main>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#home">Portfolio</Nav.Link>
          <Nav.Link href="#home">Contact Me</Nav.Link>
          <Nav.Link href="#home">Resume</Nav.Link>
        </Container>
      </Navbar>

      <header className="header">
        <h1>Nickolas Thompson</h1>
        <p>Full Stack Web Developer</p>
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