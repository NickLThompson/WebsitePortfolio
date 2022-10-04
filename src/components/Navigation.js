import React from 'react'

const navigation = () => {
    return (

        // telling the page this is a navbar with these details
        <nav className="navbar bg-dark sticky-top">

            {/* provides a full width container, spanning the entire width of the viewport; mandatory */}
            <div className="container-fluid">

                <span className="navbar-brand m-1 px-3 fs-1 h1 text-white">Nickolas Thompson</span>
                {/* margin: 1, padding left+right: 3, font size: 1, <h1> and text-color set to white */}

                <ul className="navbar-nav flex-row px-3" id="list">
                    {/* navbar-nav makes it a navbar; flex-row controls spacing and alignment */}
                    <ul>
                        <a className="navlink" href="#home">Home</a>
                    </ul>
                    <ul>
                        <a className="navlink" href="#about">About</a>
                    </ul>
                    <ul>
                        <a className="navlink" href="#portfolio">Portfolio</a>
                    </ul>
                    <ul>
                        <a className="navlink" href="#contact">Contact</a>
                    </ul>
                    <ul>
                        <a className="navlink" href="#resume">Resume</a>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}

export default navigation