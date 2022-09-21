import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const navigation = (props) => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container className="navbar">
                <Nav.Link
                    className="navlink"
                    a href="#home">Home
                </Nav.Link>

                <Nav.Link
                    className="navlink"
                    a href="#about">About
                </Nav.Link>

                <Nav.Link
                    className="navlink"
                    a href="#portfolio">Portfolio
                </Nav.Link>

                <Nav.Link
                    className="navlink"
                    a href="#contact">Contact Me
                </Nav.Link>

                <Nav.Link
                    className="navlink"
                    a href="#resume">Resume
                </Nav.Link>
            </Container>
        </Navbar>
    )
}

export default navigation