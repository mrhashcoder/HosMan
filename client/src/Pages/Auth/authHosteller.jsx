import React, { Component } from 'react'
import NavbarTop from '../../Components/Static/NavbarTop'
import LoginHosteller from '../../Components/Auth/hostellerLogin';

class authHosteller extends Component {
    
    render() {
        return (
            <div>
                <NavbarTop/>
                <LoginHosteller/>
                Hosteller Authentication
                Login And Register
            </div>
        )
    }
}

export default authHosteller
