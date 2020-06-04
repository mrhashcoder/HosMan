import React from 'react';
import '../pages.css';
import Design from '../../components/static/design';
import Navbar from '../../components/static/navbar';

class Login extends React.Component {
    render() {
        return(
            <div>
                <Navbar/>
                <Design/>
                <div className="msg">
                    <h1>Yha login hoga!!</h1>
                </div>
            </div>
        ); 
    }
}

export default Login;