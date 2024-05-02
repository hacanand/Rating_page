'use client'
import React, { useState } from "react";

// const bgColor = {
//     Adventures: '',
//     Good:
// };
const Praise = () => {
    const [bgColor, setBgColor] = useState<number>()
   
    React.useEffect(() => {
        const bgColor = localStorage.getItem("bgColor");
        if (bgColor) {
          setBgColor(JSON.parse(bgColor));
        }
      }, []);
    
  return (
    <div className="pt-10 flex flex-col">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Praise</h2>
        <h3 className=" capitalize">Lorem ipsum dolor sit ame ?</h3>
        <div className="flex sm:gap-4 gap-1">
          <span
            className={`border p-2 cursor-pointer rounded-full ${
              bgColor == 1 ? "bg-green-400" : "bg-gray-400"
            } font-semibold`}
            onClick={() => {
              setBgColor(1);
              localStorage.setItem("bgColor", JSON.stringify(1));
            }}
          >
            Adventures
          </span>
          <span
            className={`border p-2 cursor-pointer rounded-full ${
              bgColor == 2 ? "bg-green-400" : "bg-gray-400"
            } font-semibold`}
            onClick={() => {
              setBgColor(2);
              localStorage.setItem("bgColor", JSON.stringify(2));
            }}
          >
            Good
          </span>
          <span
            className={`border p-2 cursor-pointer rounded-full text-nowrap ${
              bgColor == 3 ? "bg-green-400" : "bg-gray-400"
            } font-semibold`}
            onClick={() => {
              setBgColor(3);
              localStorage.setItem("bgColor", JSON.stringify(3));
            }}
          >
            Good Answer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Praise;
