import React from 'react';
import './navbar.css';
import logoimg from "./img/logo.svg"

const Navbar = props => (
    <header>
        <div className="logo-container">
            <img src={logoimg} alt="logo"/>
            <h4 className="logo">NIT KKR H10</h4>
        </div>
        <nav>
            <ul className="nav-links">
					<li><a className="nav-link" href="#">Link1</a></li>
					<li><a className="nav-link" href="#">Link2</a></li>
					<li><a className="nav-link" href="#">Link3</a></li>
			</ul>
        </nav>
        <div className="title">
            <h1>HosMan</h1>
        </div>
    </header>
)

export default Navbar;