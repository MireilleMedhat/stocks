import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';
import useSearch from '../hooks/useSearch';

jest.mock('../hooks/useSearch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../components/SearchBar/SearchBar', () => ({
  __esModule: true,
  default: ({ setSearchText }: { setSearchText: (text: string) => void }) => (
    <input
      data-testid="search-bar"
      onChange={(e) => setSearchText(e.target.value)}
    />
  ),
}));

jest.mock('../components/StocksContainer/StocksContainer', () => ({
  __esModule: true,
  default: ({ stocks }: { stocks: any[] }) => (
    <div data-testid="stocks-container">
      {stocks.length > 0 ? stocks.join(', ') : 'No Stocks Found'}
    </div>
  ),
}));

jest.mock('../components/Message/Message', () => ({
  __esModule: true,
  default: ({ messageText }: { messageText: string }) => (
    <div>{messageText}</div>
  ),
}));

jest.mock('../components/Footer/Footer', () => ({
  __esModule: true,
  default: ({ resultsCount }: { resultsCount: number }) => (
    <div data-testid="footer">Results: {resultsCount}</div>
  ),
}));

jest.mock('react-infinite-scroll-component', () => ({
  __esModule: true,
  default: ({ children, next }: any) => (
    <div data-testid="infinite-scroll" onScroll={next}>
      {children}
    </div>
  ),
}));

describe('HomePage', () => {
  it('renders the HomePage correctly', () => {
    (useSearch as jest.Mock).mockReturnValue({
      setSearchText: jest.fn(),
      results: [],
      loadMore: jest.fn(),
      hasMore: false,
      isLoading: false,
      error: null,
    });

    render(<HomePage />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('stocks-container')).toHaveTextContent('No Stocks Found');
    expect(screen.getByTestId('footer')).toHaveTextContent('Results: 0');
  });

  it('handles search input', () => {
    const mockSetSearchText = jest.fn();
    (useSearch as jest.Mock).mockReturnValue({
      setSearchText: mockSetSearchText,
      results: [],
      loadMore: jest.fn(),
      hasMore: false,
      isLoading: false,
      error: null,
    });

    render(<HomePage />);
    const searchBar = screen.getByTestId('search-bar');
    fireEvent.change(searchBar, { target: { value: 'AAPL' } });
    expect(mockSetSearchText).toHaveBeenCalledWith('AAPL');
  });

  it('displays stocks when results are available', () => {
    (useSearch as jest.Mock).mockReturnValue({
      setSearchText: jest.fn(),
      results: ['AAPL', 'MSFT'],
      loadMore: jest.fn(),
      hasMore: false,
      isLoading: false,
      error: null,
    });

    render(<HomePage />);
    expect(screen.getByTestId('stocks-container')).toHaveTextContent('AAPL, MSFT');
  });
});
