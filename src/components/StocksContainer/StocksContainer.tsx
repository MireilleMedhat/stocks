import React from 'react';
import './StocksContainer.css';
import Card from '../Card/Card';

const StocksContainer = ({ stocks }: any) => {
  return (
    <div className="stocks">
      {stocks.map((stock: any) => (
        <Card
          key={stock.ticker}
          ticker={stock.ticker}
          companyName={stock.name}
        />
      ))}
    </div>
  );
};

export default StocksContainer;
