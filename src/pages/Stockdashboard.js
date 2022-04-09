import { useState } from "react";
import "../App.css";
import Dashboard from "../components/stocks/Dashboard";
import StockContext from "../context/StockContext";
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer'

function Stockdashboard() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (<>
  <Navigation />
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Dashboard />
    </StockContext.Provider>
  <Footer />
  </>

  )
};

export default Stockdashboard;
