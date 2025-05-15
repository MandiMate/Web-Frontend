import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { FaShoppingCart, FaBoxes, FaDollarSign, FaClipboardList } from 'react-icons/fa';
import '../style/Dashboard.css';

const LandlordDashboard = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <button className="btn-new-season">+ New Season</button>
                </div>

                <div className="cards-container">
                    <StatCard
                        icon={<FaShoppingCart />}
                        title="Total Purchases"
                        value="40,689"
                        delta="+8.5%"
                        color="#16a34a" // Emerald green
                    />
                    <StatCard
                        icon={<FaBoxes />}
                        title="Inventory"
                        value="10,293"
                        delta="+1.3%"
                        color="#059669" // Darker green
                    />
                    <StatCard
                        icon={<FaDollarSign />}
                        title="Total Sales"
                        value="89,000"
                        delta="-4.3%"
                        color="#047857" // Teal-ish green
                    />
                    <StatCard
                        icon={<FaClipboardList />}
                        title="Pending Amount"
                        value="2,040"
                        delta="+1.8%"
                        color="#65a30d" // Lime green
                    />
                </div>
            </div>
        </>
    );
};

export default LandlordDashboard;
