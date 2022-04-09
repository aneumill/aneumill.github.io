import React  from "react";
import Box from "../stocks/Box";

const Details = ({ details }) => {


  const detailsList = {
    name: "",
    logo: "",
    exchange:"",
    marketCapitalization: "",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Box>

      <ul
        className={`w-full h-full flex flex-col justify-center divide-y-1`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-center items-center w-full h-full text-2xl">
              <span>{detailsList[item]}</span>
              <span className="font-bold text-sm lg:text-lg xl:text-xl">
                {
                item === "marketCapitalization" ? <h1>${convertMillionToBillion(details[item])}B Market Cap </h1>:
                item === 'logo' ? <img src={details[item]} alt={`${details[item]}'s Logo`} className="flex w-32 h-32" /> 
                : <h1 className="">{details[item]}</h1>
        }
              </span>
            
            </li>
          );
        })}
      </ul>
    
    </Box>
  );
};

export default Details;
