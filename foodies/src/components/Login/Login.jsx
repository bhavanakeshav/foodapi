// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bg from '../../assets/login.jpg';          // adjust path if your file lives elsewhere
import './Login.css';
import { login } from '../../service/authService';
import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const { setToken, loadCartData } = useContext(StoreContext);
    const [showPwd, setShowPwd] = useState(false);
    const [data, setData] = useState({
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
            const response = await login(data);
            if (response.status === 200) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                await loadCartData(response.data.token);
                toast.success("Login Successfull!!!! Enjoy your food by ordering on BiteCart.");
                navigate('/');
            }
            else {
                toast.error("Unable to login, please SignUp or try later. ");
            }
        } catch (error) {
            toast.error("Unable to login, please SignUp or try later.");
        }
    };

    return (
        <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
            <div className="login-container py-5">
                <div className="auth-card shadow-lg">
                    <div className="auth-header">
                        <h5 className="m-0">Welcome to BiteCart</h5>
                    </div>

                    <div className="auth-body">
                        <form onSubmit={onSubmitHandler}>
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
