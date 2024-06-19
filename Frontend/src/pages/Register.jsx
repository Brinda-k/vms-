import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [apartmentName, setApartmentName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        const value = e.target.value;
        // Validate name to allow only alphabets
        if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
            setName(value);
        }
    }

    const handleOwnerNameChange = (e) => {
        const value = e.target.value;
        // Validate owner name to allow only alphabets
        if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
            setOwnerName(value);
        }
    }

    const handleApartmentNameChange = (e) => {
        const value = e.target.value;
        // Validate apartment name to allow only alphabets
        if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
            setApartmentName(value);
        }
    }

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        // Validate phone number to allow only numbers
        if (/^\d*$/.test(value) || value === '') {
            setPhoneNumber(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', { name, email, password, apartmentName, ownerName, phoneNumber })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-50" style={{ marginTop: '200px' }}>
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Owner Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                name="password"
                                className="form-control rounded-0"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apartmentName">
                                <strong>Name of the Facilities</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Faci Name"
                                autoComplete="off"
                                name="apartmentName"
                                className="form-control rounded-0"
                                value={apartmentName}
                                onChange={handleApartmentNameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ownerName">
                                <strong>Name of the Owner</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Owner Name"
                                autoComplete="off"
                                name="ownerName"
                                className="form-control rounded-0"
                                value={ownerName}
                                onChange={handleOwnerNameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber">
                                <strong>Phone Number</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                autoComplete="off"
                                name="phoneNumber"
                                className="form-control rounded-0"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0" style={{ backgroundColor: "black" }}>Register</button>
                    </form>
                    <p className="text-center">Already have an account?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                </div>
            </div>
        </>
    );
}

export default Register;
