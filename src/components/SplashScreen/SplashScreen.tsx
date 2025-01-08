import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const currentDate = new Date();
  return (
    <div className="splash-screen">
      <img src="/nasdaq_logo.png" alt="Logo" className="splash-logo" />
      <footer className="splash-footer">
        <p>&copy; {currentDate.getFullYear()} Mireille Medhat</p>
      </footer>
    </div>
  );
};

export default SplashScreen;
