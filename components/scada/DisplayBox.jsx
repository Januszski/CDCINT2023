import React from "react";
import backgroundImage from "../../public/BG58.jpeg";
import metalImage from "../../public/metal1.jpeg";
import Container from "@mui/material/Container";
import { Black_Ops_One } from "next/font/google";

const clock = Black_Ops_One({ subsets: ["latin"], weight: "400" });

const DisplayBox = ({ text, number }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        borderImage: `url(${metalImage.src}) 20% stretch`,
        borderWidth: "40px",
      }}
      className='  h-60 flex items-center justify-center'
    >
      <div
        className={`${clock.className} `}
        style={{ color: "#FFFF00", fontSize: "2rem" }}
      >
        {" "}
        {text}
        {": "}
        <span
          className={`${clock.className} `}
          style={{ color: "#FF0000", fontSize: "2rem" }}
        >
          {number}
        </span>
      </div>{" "}
    </div>
  );
};

export default DisplayBox;
