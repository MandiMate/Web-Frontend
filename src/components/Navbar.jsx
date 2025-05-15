import React, { useState } from 'react';
import '../style/Navbar.css';
import { CiSearch } from 'react-icons/ci';
import Profile from "../assets/profile.avif"

const Navbar = () => {
    const [langDropdown, setLangDropdown] = useState(false);
    const [selectedLang, setSelectedLang] = useState('English');
    const [darkMode, setDarkMode] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    const userName = localStorage.getItem("userName");
    const role = localStorage.getItem("role");

    const roleText = role === "1" ? "Admin"
        : role === "2" ? "Agent"
            : role === "3" ? "Landlord"
                : "User";


    return (
        <nav className={`navbar-container ${darkMode ? 'dark' : ''}`}>
            {/* Left Section: Search */}
            <div className="navbar-left">
                <div className="search-wrapper">
                    <CiSearch className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                    />
                </div>
            </div>

            {/* Right Section: Language, Theme, Profile */}
            <div className="navbar-right">
                {/* Language Dropdown */}
                <div className="lang-dropdown-wrapper" onClick={() => setLangDropdown(!langDropdown)}>
                    <span className="lang-selected">{selectedLang}</span>
                    <span className="arrow">▾</span>
                    {langDropdown && (
                        <div className="lang-menu">
                            <div onClick={() => setSelectedLang('English')}>English</div>
                            <div onClick={() => setSelectedLang('Urdu')}>Urdu</div>
                        </div>
                    )}
                </div>

                {/* Dark/Light Mode Toggle */}
                <label className="toggle-switch">
                    <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
                    <span className="toggle-slider"></span>
                </label>

                {/* Profile Section */}
                <div className="profile-wrapper" onClick={() => setProfileDropdown(!profileDropdown)}>
                    <img
                        src={Profile}
                        alt="avatar"
                        className="profile-img"
                    />
                    <div className="profile-text">
                        <span className="name">{userName || "User"}</span>
                        <span className="role">{roleText}</span>
                    </div>
                    <span className="arrow">▾</span>
                    {profileDropdown && (
                        <div className="profile-menu">
                            <div>Profile</div>
                            <div>Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
