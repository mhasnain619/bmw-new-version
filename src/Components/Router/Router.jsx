import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "../Access/Signup/Signup";
import Login from "../Access/Login/Login";
import Home from "../Home/Home";

const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};

const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/signup" />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
