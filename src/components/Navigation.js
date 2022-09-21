import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container className="navbar">
                <Nav.Link className="navlink" href="#home">Home</Nav.Link>
                <Nav.Link className="navlink" href="#about">About</Nav.Link>
                <Nav.Link className="navlink" href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link className="navlink" href="#contactMe">Contact Me</Nav.Link>
                <Nav.Link className="navlink" href="#resume">Resume</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default navigation