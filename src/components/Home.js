/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Home = () => {
    return (
        <section className='container'>
            <div class="row">
                <div className="col-8 text-center" id="starter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <div className="col text-center">
                    <img
                        src={require("../images/PortfolioImage1.png")}
                        alt="Portfolio Image"
                        id="portfolioImage">
                    </img>
                </div>
            </div>
        </section>
    )
}

export default Home

//             <img
//                 src={require("../images/PortfolioImage1.png")}
//                 alt="Portfolio Image"
//                 id="portfolioImage">
//             </img>