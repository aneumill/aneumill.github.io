import React, { useContext, useEffect, useState } from "react";
import StockOverview from "./StockOverview";
import Details from "./Details";
import Chart from "./Chart";
import Stockheader from "./Stockheader";
import StockContext from "../../context/StockContext";
import Search from './Search'
import Modal from "./Modal"
import { fetchStockDetails, fetchQuote } from "../../utils/api/stockapi";

const Dashboard = () => {
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <>
    <center>
      <div>
           <h1 className="font-medium leading-tight text-5xl mb-2  text-black pt-10">FinnHub API Stock Dashboard <Modal/></h1>
           <Stockheader name={stockDetails.name} />
    </div>
    
  </center>
    <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand `}>
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>
      <div>
        <StockOverview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
    </>
  );
};

export default Dashboard;