import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { postAuth } from '../api/axios';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            let response = await postAuth("auth/signin", data)

            toast.success(response?.data?.message, { position: 'top-center' });

            setTimeout(() => {
                if (response?.data?.user) {
                    localStorage.setItem("token", response?.data.token)
                    navigate("/dashboard")
                }
            }, 3000);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        let token = localStorage.getItem("token");

        if (token) {
            navigate("/dashboard")
        }
        else {
            navigate("/")
        }
    }, []);


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
                    <h2>Welcome to MandiMate</h2>
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
