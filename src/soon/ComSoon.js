import React from 'react';
import Footer from '../users/components/Footer';
import Navbar from '../users/components/Navbar';

const ComSoon = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: '100%', height: '100vh' }} className="d-flex align-items-center justify-content-center">
        <h1>Coming Soon !</h1>
      </div>
      <Footer />
    </>
  );
};

export default ComSoon;
