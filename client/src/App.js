import React from 'react';
//Importing Pages
import Error404 from './Pages/Main/Error404.jsx';
import Index from './Pages/Main/index.jsx';
import authWarden from './Pages/Auth/authWarden';
import authHosteller from './Pages/Auth/authHosteller';
import Hosteller from './Pages/Hosteller/index';
import Warden from './Pages/Warden/index';

//Importing Css
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
          <Route exact path="/" component={Index}/>
          <Route exact path="/hosteller" component={Hosteller}/>
          <Route exact path="/warden" component={Warden}/>          
          <Route exact path="/authWarden" component={authWarden}/>
          <Route exact path="/authHosteller" component={authHosteller}/>
          <Route exact path="/404" component={Error404}/>
          
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
