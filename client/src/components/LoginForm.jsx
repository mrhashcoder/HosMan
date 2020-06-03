import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
            </form>
        )
    }
}

export default LoginForm;