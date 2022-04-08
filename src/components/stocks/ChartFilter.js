import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer border-black ${
        active
          ? "bg-black border-black text-gray-100"
          : "border-black text-black"
      } transition duration-200 hover:bg-grey-0 hover:text-gray-100 hover:bg-black`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
