// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bg from '../../assets/login.jpg';          // ← background image
import './Register.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { registerUser } from '../../service/authService';


const Register = () => {

    const navigate = useNavigate();
    const [showPwd, setShowPwd] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });


    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({
            ...data, [name]: value
        }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await registerUser(data);
            if (response.status === 201 || response.status === 200) {
                toast.success("Registration Successfull, please login.");
                navigate("/login");
            }
            else {
                toast.error("Unable to register, please try again later. ");
            }
        } catch (error) {
            toast.error("Unable to register, please try again later.");
        }
    };

    return (
        <div className="auth-page" style={{ backgroundImage: `url(${bg})` }}>
            <div className="register-container py-5">
                <div className="auth-card shadow-lg">
                    <div className="auth-header">
                        <h5 className="m-0">Create your BiteCart account</h5>
                    </div>

                    <div className="auth-body">
                        <form onSubmit={onSubmitHandler}>
                            {/* Full name */}
                            <div className="mb-3 position-relative">
                                <label className="form-label">Full Name</label>
                                <div className="position-relative">
                                    <input
                                        id="fullName"
                                        type="text"
                                        className="form-control pe-5"
                                        placeholder="John Doe"
                                        autoComplete="name"
                                        name='name'
                                        onChange={onChangeHandler}
                                        value={data.name}
                                        required
                                    />
                                    <i className="bi bi-person position-absolute end-0 top-50 translate-middle-y me-3 text-muted" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-3 position-relative">
                                <label className="form-label">Email address</label>
                                <div className="position-relative">
                                    <input
                                        type="email"
                                        className="form-control pe-5"
                                        placeholder="name@example.com"
                                        autoComplete="email"
                                        name='email'
                                        onChange={onChangeHandler}
                                        value={data.email}
                                        required
                                    />
                                    <i className="bi bi-envelope position-absolute end-0 top-50 translate-middle-y me-3 text-muted" />
                                </div>

                            </div>

                            {/* Password */}
                            <div className="mb-3 position-relative">
                                <label className="form-label">Password</label>
                                <input
                                    type={showPwd ? 'text' : 'password'}
                                    className="form-control pe-5"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    name='password'
                                    onChange={onChangeHandler}
                                    value={data.password}
                                    required
                                />
                                <button
                                    type="button"
                                    className="icon-btn"
                                    onClick={() => setShowPwd(v => !v)}
                                    aria-label="Toggle password visibility"
                                >
                                    <i className={`bi ${showPwd ? 'bi-eye-slash' : 'bi-eye'}`} />
                                </button>
                            </div>

                            <div className="text-end mb-3">
                                <a href="#" className="text-decoration-none">Reset Password</a>
                            </div>

                            <button type="submit" className="btn btn-login w-100">Sign Up</button>

                            <div className="register-link">
                                Already have an account? <Link to="/login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
