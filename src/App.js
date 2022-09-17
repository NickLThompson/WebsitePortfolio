import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import './styles/style.css';


function App() {
  // useState();

  return (
    <main>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container className="navbar">
          <Nav.Link className="navlink" href="#home">Home</Nav.Link>
          <Nav.Link className="navlink" href="#about">About</Nav.Link>
          <Nav.Link className="navlink" href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link className="navlink" href="#contactMe">Contact Me</Nav.Link>
          <Nav.Link className="navlink" href="#resume">Resume</Nav.Link>
        </Container>
      </Navbar>

      <header className="header">
        <h1>Nickolas Thompson</h1>
        <p>Full Stack Web Developer</p>
      </header>

      <section className="section">
        <h1>Home Section</h1>
        <p>put a quick summary or something here</p>
      </section>

      <section className="section">
        <h2>About Me Section</h2>
        <p>This is where I'll put actual information about myself and why I got into coding, my hobbies, etc.</p>
      </section>

      <section className="section">
        <h3>Portfolio Section</h3>
        <p>This section will be where I show off my github projects</p>
      </section>

      <section className="section">
        <h3>Contact Me Section</h3>
        <p>This will have ways to contact me, pretty self explanatory</p>
      </section>

      <section className="section">
        <h3>Resume Section</h3>
        <p>This is where I will put my resume to be seen and also downloaded (maybe?)</p>
      </section>
      

    </main>
  );
}

export default App;