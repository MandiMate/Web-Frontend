import React, { useEffect, useState } from 'react';
import '../style/SeasonOverview.css';
import { LiaClipboardListSolid } from 'react-icons/lia';

const SeasonOverview = ({ onAddNewPurchase }) => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('purchases')) || [];
        setPurchases(data);
    }, []);

    return (
        <div className="season-container">
            <div className="season-header">
                <h2 className="season-title">Season Overview</h2>
                <div className="season-info">
                    <span className="season-label">🌱 Spring</span>
                    <span className="season-duration">(May – August)</span>
                    <button className="add-new-list" onClick={onAddNewPurchase}><span style={{ fontSize: "18px", marginRight: "7px" }}><LiaClipboardListSolid /></span> Add New List</button>
                </div>
            </div>

            <div className="filter-section">
                <div className="filters">
                    <button className="filter-btn">Filter By</button>
                    <select className="dropdown">
                        <option>Date</option>
                    </select>
                    <select className="dropdown">
                        <option>Order Type</option>
                    </select>
                    <select className="dropdown">
                        <option>Order Status</option>
                    </select>
                </div>
                <button className="reset-filter">Reset Filter</button>
            </div>

            <div className="table-wrapper">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>DATE</th>
                            <th>Landlord Name</th>
                            <th>Farmer Name</th>
                            <th>STATUS</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00001</td>
                            <td>Wheat</td>
                            <td>32 TON</td>
                            <td>24,000 / TON</td>
                            <td>29 May 2025</td>
                            <td>M Ali</td>
                            <td>Noman Khan</td>
                            <td><span className="status completed">Completed</span></td>
                            <td className="actions">
                                <i className="fas fa-edit" title="Edit"></i>
                                <i className="fas fa-trash-alt" title="Delete"></i>
                            </td>

                        </tr>
                        <tr>
                            <td>00002</td>
                            <td>Spinach</td>
                            <td>28 TON</td>
                            <td>18,000 / TON</td>
                            <td>29 May 2025</td>
                            <td>Ahsan</td>
                            <td>Adil</td>
                            <td><span className="status processing">Processing</span></td>
                            <td className="actions">
                                <i className="fas fa-edit" title="Edit"></i>
                                <i className="fas fa-trash-alt" title="Delete"></i>
                            </td>
                        </tr>

                        {
                        // purchases.length === 0 ? (
                        //     <tr>
                        //         <td colSpan="9" style={{ textAlign: 'center' }}>
                        //             No purchases found.
                        //         </td>
                        //     </tr>
                        // ) : (
                            purchases.map((item, index) => (
                                <tr key={index}>
                                    <td>00003</td>
                                    <td>{item.product || 'N/A'}</td>
                                    <td>{item.quantity || 'N/A'}</td>
                                    <td>{item.rate || 'N/A'}</td>
                                    <td>{item.date || 'N/A'}</td>
                                    <td>{item.landlordName || 'N/A'}</td>
                                    <td>{item.farmerName || 'N/A'}</td>
                                    <td>
                                        {/* You can add logic here for status if available */}
                                        <span className="status processing">Processing</span>
                                    </td>
                                    <td className="actions">
                                        <i className="fas fa-edit" title="Edit"></i>
                                        <i className="fas fa-trash-alt" title="Delete"></i>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            <div className="footer-controls">
                <button className="end-season">End Season</button>
                <div className="pagination-controls">
                    <button>{'<'}</button>
                    <button>{'>'}</button>
                </div>
            </div>
        </div>
    );
};

export default SeasonOverview;
