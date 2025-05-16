import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { postAuth } from "../api/axios"

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            let response = await postAuth("auth/register", data)

            toast.success(response?.data?.message, { position: 'top-center' });

            setTimeout(() => {
                if (response?.data?.newUser) {
                    navigate("/")
                }
            }, 3000);

        } catch (err) {
            console.log(err);

        }
    };

    return (
        <div className="split-container signup-page">
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
                    <h2>Create Your MandiMate Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group">
                            <label>User Name</label>
                            <input
                                type="text"
                                {...register('userName', { required: 'User Name is required' })}
                            />
                            {errors.userName && <p className="error">{errors.userName.message}</p>}
                        </div>

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
                        <div className="input-group">
                            <label>Select Role</label>
                            <select {...register('role', { required: 'Role is required' })}>
                                <option value="">Select Role</option>
                                <option value={2}>Agent</option>
                                <option value={3}>Landlord</option>
                            </select>
                            {errors.role && <p className="error">{errors.role.message}</p>}
                        </div>

                        <button type="submit" className="login-button">Sign Up</button>

                        <div className="form-links">
                            <span>Already have an account? </span>
                            <Link to="/login">Login here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
