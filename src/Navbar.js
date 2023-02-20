import React from 'react';
import "./navbar.css";

const Navbar = () => {

    return (
        <>
        <nav className="main-nav">
        { /*1st logo part*/}
            <div className="logo">
                <h2>
                    <span>V</span>ector
                    <span>AB</span>
                </h2>
            </div>
        {/*2nd menu part */}
        <div className="menu-link">
                <ul>
                    <ol>
                        <a href="/">Home</a>
                    </ol>
                    <ol>
                    <a href="/about">About</a>                  
                    </ol>
                    <ol>
                        <a href="/contact">Contact</a>
                    </ol>
                </ul>
            </div>    
        </nav>

        </>
    );
};

export default Navbar;