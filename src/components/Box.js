import React from "react";


const Box = ({ children }) => {

  return (
    <div className={`w-full h-full rounded-md relative p-8 border-2`}>
      {children}
    </div>
  );
};

export default Box;
