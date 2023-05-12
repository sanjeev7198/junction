import "./App.css";
import * as React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./Components/Signup";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/pricing" element={<Pricing/>} />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
