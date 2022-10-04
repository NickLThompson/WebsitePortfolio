import React from 'react'

const navigation = () => {
    return (

        // telling the page this is a navbar with these details
        <nav className="navbar bg-dark sticky-top">

            {/* provides a full width container, spanning the entire width of the viewport; mandatory */}
            <div className="container-fluid">

                <span className="navbar-brand m-1 p-1 fs-1 h1 text-white">Nickolas Thompson</span>

                <ul className="navbar-nav flex-row">
                    {/* navbar-nav makes it as navbar; flex-row controls spacing and alignment; padding-border-margin */}
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