import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <h1>MandiMate Admin Dashboard</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </nav>
            <div className="dashboard-content">
                <h2>Welcome Admin Panel!</h2>
            </div>
        </div>
    );
};

export default AdminDashboard;
