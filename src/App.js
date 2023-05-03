import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/"><Homepage /></Route>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
