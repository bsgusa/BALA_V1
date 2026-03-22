import React, { useState } from 'react';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('User registered:', { username, password, role });
    };

    return (
        <div>
            <h1>User Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Role:
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value='user'>User</option>
                            <option value='driver'>Driver</option>
                            <option value='admin'>Admin</option>
                        </select>
                    </label>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default SignUpPage;