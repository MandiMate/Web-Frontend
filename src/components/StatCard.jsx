import React from 'react';
import '../style/StatCard.css';

const StatCard = ({ icon, title, value, delta, color }) => {
    const isPositive = delta.startsWith('+');

    return (
        <div className="stat-card" style={{ borderLeft: `6px solid ${color}`, backgroundColor: '#f0fdf4' }}>
            <div className="icon" style={{ background: `${color}33` }}>
                {icon}
            </div>
            <div className="details">
                <p className="title">{title}</p>
                <h3 className="value">{value}</h3>
                <p className={`delta ${isPositive ? 'positive' : 'negative'}`}>{delta}</p>
            </div>
        </div>
    );
};

export default StatCard;
