import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "../CSS/App.css"
import Navbar from "../pages/navbar";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Footer from "../components/footer"

function App() {

    return (
        <div className="App">
            {/* <Header /> */}
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="register" element={<Register />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;



