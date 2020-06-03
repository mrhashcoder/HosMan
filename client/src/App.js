import React from 'react';
import Navbar from './components/navbar.jsx';
import Design from './components/design.jsx';

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
