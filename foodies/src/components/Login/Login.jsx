// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bg from '../../assets/login.jpg';          // adjust path if your file lives elsewhere
import './Login.css';

const Login = () => {
    const [showPwd, setShowPwd] = useState(false);

    return (
        <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
            <div className="login-container py-5">
                <div className="auth-card shadow-lg">
                    <div className="auth-header">
                        <h5 className="m-0">Welcome to BiteCart</h5>
                    </div>

                    <div className="auth-body">
                        <form noValidate>
                            {/* Email */}
                            <div className="mb-3 position-relative">
                                <label className="form-label">Email address</label>
                                <div className="position-relative">
                                    <input
                                        type="email"
                                        className="form-control pe-5"
                                        placeholder="name@example.com"
                                        autoComplete="email"
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

                            <button type="submit" className="btn btn-login w-100">Sign In</button>

                            <div className="register-link">
                                Don’t have an account? <Link to="/register">Register now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
