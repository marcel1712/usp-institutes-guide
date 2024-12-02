import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_result from './navigation/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar_result/>
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
