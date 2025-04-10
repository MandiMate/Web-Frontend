import React from 'react';
import Sidebar from '../components/SideBar.jsx';

const Dashboard = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ marginLeft: "220px", padding: "40px", width: "100%" }}>
                <h1 style={{ color: "#1a3f2f", fontSize: "32px", marginBottom: "20px" }}>
                    Welcome to MandiMate Dashboard
                </h1>
                <p style={{ fontSize: "18px" }}>You are logged in successfully!</p>
            </div>
        </div>
    );
};

export default Dashboard;
