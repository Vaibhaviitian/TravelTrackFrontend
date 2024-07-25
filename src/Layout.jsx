// Layout.jsx
import React from 'react';
import Footer from './components/users/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <main className="container mx-auto mt-4">
        {children} 
      </main>
      <Footer />
    </>
  );
};

export default Layout;
