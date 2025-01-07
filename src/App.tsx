import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './services/store';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <div className="background">
        {isLoading ? <SplashScreen /> : <HomePage />}
      </div>
    </Provider>
  );
};

export default App;

