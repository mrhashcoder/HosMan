import React from 'react';
import Navbar from './components/static/navbar.jsx';
import Design from './components/static/design.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css'

class App extends React.Component {
  
  render() {
    return(
      <div>
        <Navbar/>
        <Design/>
        <div className ="login">
          <LoginForm/>
        </div>
      </div>
    );
  }
}

export default App;
