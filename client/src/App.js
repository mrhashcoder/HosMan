import React from 'react';
import LandingPage from './pages/landingpage.jsx';
import NotFoundPage from './pages/404.jsx';
import Login from  './pages/auth/login.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Route exact path="/login" component={Login} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
