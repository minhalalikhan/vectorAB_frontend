import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to="/Home">Home</Link>
                        </ol>
                        <ol>
                            <Link to="/about">About</Link>
                        </ol>
                        <ol>
                            <Link to="/contact">Contact</Link>
                        </ol>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Navbar;