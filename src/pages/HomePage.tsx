import React from 'react';
import { useEffect, useState } from 'react';
import './HomePage.css';
import SearchBar from '../components/SearchBar/SearchBar';
import useSearch from '../hooks/useSearch';
import Footer from '../components/Footer/Footer';
import Message from '../components/Message/Message';
import Card from '../components/Card/Card';
import StocksContainer from '../components/StocksContainer/StocksContainer';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [stocks, setStocks] = useState([]);

  const { data, loading, error } = useSearch(searchText);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  useEffect(() => {
    if (data && data?.results) setStocks(data?.results);
  }, [data]);

  return (
    <div className="container" data-testid="home-page">
      <div className="header-container">
        <h1 className="header">NASDAQ Stocks</h1>
        <SearchBar
          setSearchText={setSearchText}
        />
      </div>
      <div className="tableContainer">
        {loading ? (
          <Message messageText="Loading...please wait." />
        ) : (
          <StocksContainer stocks={stocks} />
        )}
      </div>
      <Footer
        resultsCount={data?.count}
      />
    </div>
  );
};

export default HomePage;
