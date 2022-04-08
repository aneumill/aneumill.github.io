import React from "react";
import Box from "../stocks/Box";

const StockOverview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Box>
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center text-green-800">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-black-400 m-2">
            {currency}
          </span>
        </span>
        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Box>
  );
};

export default StockOverview;
