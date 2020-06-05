import React from 'react';
import Navbar from '../components/static/navbar.jsx.js';
import Design from '../components/static/design.jsx.js';
import {Link} from 'react-router-dom';
import './pages.css';

class LandingPage extends React.Component {

    render() {
        return(
            <div>
                <Navbar/>
                <Design/>
                <div className="content">
                    <h1>You are?</h1>
                    <span><Link to="/login"><button className="btn1">Hosteller</button></Link></span>
                    <span><Link to="/login"><button className="btn2">Warden</button></Link></span>
                </div>
            </div>
        ); 
    }
}

export default LandingPage;