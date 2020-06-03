import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        )
    }
}

export default LoginForm;