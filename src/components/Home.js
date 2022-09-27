/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <Container className="">
            <Row>
                <Col md={6} id="starter">Hey! I'm Nickolas Thompson. Welcome to my page. Full Stack Web Developer, musician, and problem-solver.
                </Col>
                <Col md={6} id="portfolioImage">
                    <img
                        src={require("../images/PortfolioImage1.png")}
                        alt="Portfolio Image"
                        id="portfolioImage">
                    </img>
                </Col>
            </Row>
        </Container>
    )
}

export default Home