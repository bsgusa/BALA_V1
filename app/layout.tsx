import React from 'react';
import { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from './navbar';

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Description of your application',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
