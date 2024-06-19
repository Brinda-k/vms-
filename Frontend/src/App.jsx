import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Visitor from './pages/visitor';
import VisitorForm from './components/VisitorForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/visitor" element={<Visitor/>} />
                <Route path="/visitor-form" component={VisitorForm} />
            </Routes>
        </Router>
    );
}

export default App;
