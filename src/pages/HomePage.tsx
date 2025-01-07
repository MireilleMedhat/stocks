import React, { useEffect } from 'react';
import './HomePage.css';
import SearchBar from '../components/SearchBar/SearchBar';
import useSearch from '../hooks/useSearch';
import Footer from '../components/Footer/Footer';
import Message from '../components/Message/Message';
import StocksContainer from '../components/StocksContainer/StocksContainer';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage = () => {
  const {
    setSearchText,
    results: stocks,
    loadMore,
    hasMore,
    isLoading,
    error,
  } = useSearch();

  useEffect(() => {
    if (error) {
      if ('status' in error) {
        const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
        alert(errMsg);

      } else {
        alert(error.message);
      }
    }
  }, [error]);

  return (
    <div className="container" data-testid="home-page">
      <div className="header-container">
        <h1 className="header">NASDAQ Stocks</h1>
        <SearchBar setSearchText={setSearchText} />
      </div>

      <div className="stocks-container" id="scrollable_div">
        <InfiniteScroll
          dataLength={stocks.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<Message messageText="Loading more..." />}
          scrollableTarget="scrollable_div"
        >
          {isLoading && stocks?.length === 0 ? (
            <Message messageText="Loading...please wait." />
          ) : (
            <StocksContainer stocks={stocks} />
          )}
        </InfiniteScroll>
      </div>

      <Footer resultsCount={stocks.length} />
    </div>
  );
};

export default HomePage;
