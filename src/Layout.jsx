// Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <main className="container mx-auto mt-4">
        {children} 
      </main>
    </>
  );
};

export default Layout;
