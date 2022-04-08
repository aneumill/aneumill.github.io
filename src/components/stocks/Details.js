import React  from "react";
import Box from "../stocks/Box";

const Details = ({ details }) => {


  const detailsList = {
    name: "",
    logo: "",
    marketCapitalization: "",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };
  const setImage = (image) =>
  {
    return <img src={image}/>
  }

  return (
    <Box>
      <ul
        className={`w-full h-full flex flex-col justify-center divide-y-1`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-center items-center sm:text-sm">
              <span>{detailsList[item]}</span>
              <span className="font-bold">
                {
                item === "marketCapitalization" ? <h1 className="text-xl">${convertMillionToBillion(details[item])}B Market Cap </h1>:
                item === 'logo' ? <img src={details[item]} alt={`${details[item]}'s Logo`} className="h-96 w-96" /> 
                : <h1 className="text-lg">{details[item]}</h1>
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
