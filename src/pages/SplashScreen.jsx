// src/pages/SplashScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SplashScreen.css';
import Splash from "../assets/SplashM.png"

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Redirect to login page
    }, 4000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={Splash} alt="MandiMate Splash" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
