import React from 'react';
import Navbar from './components/static/navbar.jsx';
import Design from './components/static/design.jsx';

class App extends React.Component {
  
  render() {
    return(
      <div>
        <Navbar/>
        <Design/>
      </div>
    );
  }
}

export default App;
