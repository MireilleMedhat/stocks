# 📈Nasdaq Stocks

This is a stock market app designed to let users search for and view stocks listed on the NASDAQ exchange. Built with React and TypeScript, the app features seamless searching, infinite scrolling for stock data, and a splash screen that adds a polished experience.

## Main Features

- **Live Search:** Users can search for specific stocks by typing in the search bar. The search function triggers as users type, showing results in real-time.
- **Infinite Scrolling:** Stocks are loaded dynamically when users scroll, preventing page reloads and enhancing performance.
- **Search and Existing Data Switching:** Users can switch between searching for stocks and viewing previously loaded data without losing context.
- **Error Handling:** The app includes error handling to account for issues such as rate-limiting from the API.
- **Cache API Responses:** Redundant requests are avoided by caching API responses, improving performance and reducing unnecessary calls.
- **Splash Screen:** The app displays a splash screen with the Nasdaq logo centered on the screen and the developer’s name at the bottom.
- **Responsive and Clean UI:** The app’s interface is designed to be clean, responsive, and easy to use on both desktop and mobile devices.

## Available Scripts

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs tests in interactive watch mode.  
Tests are written to ensure the app functions correctly, including API interaction, search functionality, and more.

### `npm run build`

Builds the app for production to the `build` folder.  
Optimizes the app for performance and prepares it for deployment.

### `npm run eject`

Ejects the configuration and dependencies, giving you full control over the build setup.  
Use with caution, as this is a one-way operation.

## Deployment

- **Web App:** The app is live and ready for demo at [Insert Live Demo Link Here].
- **Repository:** The code is available at [Insert GitHub Repo Link Here].

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```

## Learn More

For further details about React, TypeScript, and the stock market API, you can check out the official documentation:
- [React Documentation](https://reactjs.org/)
- [Polygon API Documentation](https://polygon.io/docs/stocks/get_v3_reference_tickers)
