import React from 'react'
import logo from './images/logo.png'
import './css/NavbarTop.css'
function NavbarTop() {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <span className="navbar-brand">
                    <img src = {logo} className="logo"></img>
                </span>
            </nav>
        </div>
    )
}

export default NavbarTop;
