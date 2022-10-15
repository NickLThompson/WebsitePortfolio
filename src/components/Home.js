/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Home = () => {
    return (
        <div className="container-fluid text-center" id="home">
            <div className="row">
                <div className="col fs-3" id="starter">My name is Nickolas Thompson. I'm a Full Stack Web Developer from North Carolina. </div>
                <div className="col" id="starter2">
                    <img
                        src={require("../images/PortfolioImage1.png")}
                        alt="Portfolio Image"
                        id="portfolioImage">
                    </img>
                </div>
            </div>
        </div>
    )
}
export default Home