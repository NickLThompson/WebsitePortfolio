/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import navigation from './Navigation'

const Home = () => {
    return (
        <section className="section" id="home">
            <h1>Hey! I'm Nickolas Thompson. Welcome to my page.</h1>
            <p>
                Full Stack Web Developer, musician, and problem-solver.
            </p>
            <img src={require("../images/PortfolioImage1.png")} alt="Portfolio Image" id="portfolioImage"></img>
        </section>
    )
}

export default Home