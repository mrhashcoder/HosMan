import React from 'react'
import logo from './images/logo.png'
import './css/NavbarTop.css'
function NavbarTop() {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark NavbarTop">
                <span className="nav-item">
                    <img src = {logo} className="logo" align="left"></img>
                </span> 
                <span class="navbar-nav ml-auto" align="right">
                    <b>Developed By : Mrhashcoder & Keshav </b>
                </span>               
            </nav>
        </div>
    )
}

export default NavbarTop;
