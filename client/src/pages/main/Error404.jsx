import React from 'react';
import Navbar from '../components/static/navbar.jsx';
import Design from '../components/static/design.jsx';
import './pages.css'

const NotFoundPage = () => {
    return(
        <div>
            <Navbar/>
            <Design/>
            <div className="msg">
                <h2>404 Not Found!!!</h2>
            </div>
        </div>
    );
}

export default NotFoundPage;