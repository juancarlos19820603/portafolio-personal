

import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>

    </div>
  );
}

export default App;
