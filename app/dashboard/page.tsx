import React from 'react';
import { Dashboard } from './components/Dashboard';

const UserDashboard = () => {
    const trips = [];
    const earnings = 0;
    const profileInfo = {};

    return (
        <div>
            <h1>User Dashboard</h1>
            <Dashboard trips={trips} earnings={earnings} profileInfo={profileInfo} />
        </div>
    );
};

export default UserDashboard;