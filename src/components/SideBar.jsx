import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaCalendarAlt,
    FaShoppingCart,
    FaBoxes,
    FaWallet,
    FaChartBar,
    FaBell,
    FaCog,
    FaSignOutAlt,
    FaBars,
} from "react-icons/fa";
import "../style/Sidebar.css";
import { toast, ToastContainer } from 'react-toastify';


const Sidebar = () => {

    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');

        toast.success("Logout Successfully!", { position: 'top-center' });

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="sidebar">
            <ToastContainer />
            <div className="sidebar-logo">MandiMate</div>
            <nav className="sidebar-nav">
                <Link to="/dashboard" className="sidebar-link">
                    <FaHome className="sidebar-icon" /> Dashboard
                </Link>
                <Link to="/season" className="sidebar-link">
                    <FaCalendarAlt className="sidebar-icon" /> Season
                </Link>
                <Link to="/purchase" className="sidebar-link">
                    <FaShoppingCart className="sidebar-icon" /> Purchase Entry
                </Link>
                <Link to="/inventory" className="sidebar-link">
                    <FaBoxes className="sidebar-icon" /> Inventory
                </Link>
                <Link to="/payment" className="sidebar-link">
                    <FaWallet className="sidebar-icon" /> Payment
                </Link>
                <Link to="/report" className="sidebar-link">
                    <FaChartBar className="sidebar-icon" /> Report
                </Link>
                <Link to="/notifications" className="sidebar-link">
                    <FaBell className="sidebar-icon" /> Notification
                </Link>
                <Link to="/settings" className="sidebar-link">
                    <FaCog className="sidebar-icon" /> Setting
                </Link>
            </nav>
            <div className="sidebar-link logout" onClick={handleLogout}>
                <FaSignOutAlt className="sidebar-icon" /> Logout
            </div>
        </div>
    );
};

export default Sidebar;
