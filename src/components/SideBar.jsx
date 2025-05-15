import React from 'react';
import '../style/SideBar.css';
import logo from "../assets/LOGO.png"
import { FaChartLine, FaLeaf, FaTruck, FaBoxOpen, FaFileAlt, FaCog, FaSignOutAlt, FaPowerOff } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src={logo} className="sidebar-logo" />
            </div>
            <ul className="sidebar-menu">
                <li className="menu-item active"><FaChartLine /> Dashboard</li>
                <li className="menu-item"><FaLeaf /> Seasons</li>
                <li className="menu-item"><FaTruck /> Purchases</li>
                <li className="menu-item"><FaBoxOpen /> Inventory</li>
                <li className="menu-item"><FaFileAlt /> Reports</li>
            </ul>
            <div className="sidebar-bottom">
                <div className="menu-item"><FaCog /> Settings</div>
                <div className="menu-item logout" onClick={handleLogout}><FaPowerOff /> Logout</div>
            </div>
        </aside>
    );
};

export default Sidebar;
