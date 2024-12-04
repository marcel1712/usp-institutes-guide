import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_result from './navigation/Navbar';
//import Home from './pages/Home';
import Group from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar_result/>
      <header className="App-header">
        <Group/>
      </header>
    </div>
  );
}

export default App;
