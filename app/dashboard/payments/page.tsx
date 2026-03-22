// app/dashboard/payments/page.tsx
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-public-key-here'); // Replace with your actual Stripe public key

const PaymentHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch payment history from your backend API
        const fetchTransactions = async () => {
            const response = await fetch('/api/transactions'); // Adjust the endpoint as needed
            const data = await response.json();
            setTransactions(data);
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <h1>Payment History</h1>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.date}: {transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const PaymentsPage = () => {
    return (
        <div>
            <PaymentHistory />
        </div>
    );
};

export default PaymentsPage;