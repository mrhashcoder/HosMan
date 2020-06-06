import React, { Component } from 'react';
import NavbarTop from '../../Components/Static/NavbarTop';
import NavbarHosteller from '../../Components/Static/NavbarHosteller';

class index extends Component {
    
    render() {
        return (
            <div>
                <NavbarTop/>
                <NavbarHosteller/>
                Hosteller Page
            </div>
        )
    }
}

export default index
