import React from 'react';
import '../style/SideBar.css';
import logo from "../assets/LOGO.png"
import { FaChartLine, FaLeaf, FaTruck, FaBoxOpen, FaFileAlt, FaCog, FaSignOutAlt, FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdCloudDone } from 'react-icons/md';
import { AiFillProduct } from 'react-icons/ai';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;


    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src={logo} className="sidebar-logo" />
            </div>
            <ul className="sidebar-menu">
                <Link to={"/agent-dashboard"} className={`menu-item ${currentPath == "/agent-dashboard" ? "active" : ""}`}><FaChartLine /> Dashboard</Link>
                <Link to={"/season-overview"} className={`menu-item ${currentPath == "/season-overview" ? "active" : ""}`}><MdCloudDone /> Season Overview</Link>
                <Link to={"/Products"} className={`menu-item ${currentPath == "/Products" ? "active" : ""}`}><AiFillProduct /> Products</Link>
                <Link to={"/Inventory"} className={`menu-item ${currentPath == "/Inventory" ? "active" : ""}`}><FaBoxOpen /> Inventory</Link>
                <Link to={"/Reports"} className={`menu-item ${currentPath == "/Reports" ? "active" : ""}`}><FaFileAlt /> Reports</Link>
            </ul>
            <div className="sidebar-bottom">
                <div className="menu-item"><FaCog /> Settings</div>
                <div className="menu-item logout" onClick={handleLogout}><FaPowerOff /> Logout</div>
            </div>
        </aside>
    );
};

export default Sidebar;
