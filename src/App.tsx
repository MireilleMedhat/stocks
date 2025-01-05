import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background">
      {isLoading ? <SplashScreen /> : <HomePage />}
    </div>
  );
};

export default App;

