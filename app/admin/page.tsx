import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="statistics">
                <div className="stat">
                    <h2>Users</h2>
                    <p>100</p> {/* Replace with actual data */}
                </div>
                <div className="stat">
                    <h2>Drivers</h2>
                    <p>50</p> {/* Replace with actual data */}
                </div>
                <div className="stat">
                    <h2>Trips</h2>
                    <p>200</p> {/* Replace with actual data */}
                </div>
                <div className="stat">
                    <h2>Earnings</h2>
                    <p>$5000</p> {/* Replace with actual data */}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
