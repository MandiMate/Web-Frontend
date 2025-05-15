import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { postAuth } from '../api/axios';
import logo from "../assets/main_logo.png"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            let response = await postAuth("auth/signin", data);


            toast.success(response?.data?.message, { position: 'top-center' });

            setTimeout(() => {
                if (response?.data?.user) {
                    localStorage.setItem("token", response?.data.token);

                    const role = response?.data?.user?.role;
                    localStorage.setItem("role", response?.data?.user?.role);
                    localStorage.setItem("userName", response?.data?.user?.userName || "");

                    if (role == 1) {
                        navigate("/admin-dashboard");
                    } else if (role == 2) {
                        navigate("/agent-dashboard");
                    } else if (role == 3) {
                        navigate("/landlord-dashboard");
                    } else {
                        navigate("/");
                    }
                }
            }, 3000);

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="split-container login-page">
            <ToastContainer />

            <div className="left-panel">
                <div className="left-overlay" />
                <div className="left-content">
                    <h1>MandiMate</h1>
                    <p>Empowering Mandi Agents with Digital Record Keeping</p>
                </div>
            </div>

            <div className="right-panel">
                <div className="form-box">
                    <div className="logo-container">
                        <img src={logo} alt="MandiMate Logo" className="logo" />
                    </div>
                    <h2>Welcome To MandiMate</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>

                        <div className="form-links bottom-link">
                            <Link to="/">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="login-button">Login</button>

                        <div className="form-links">
                            <span>Don't have an account? </span>
                            <Link to="/signup">Create one</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
