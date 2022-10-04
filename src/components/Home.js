/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Home = () => {
    return (
    <div className="container text-center" id="home">
            <div class="row">
                <div className="col fs-3" id="starter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
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