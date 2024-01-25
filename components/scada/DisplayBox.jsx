import React from "react";
import backgroundImage from "../../public/BG58.jpeg";
import metalImage from "../../public/metal1.jpeg";
import Container from "@mui/material/Container";


const DisplayBox = ({ text, number, abr }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        borderImage: `url(${metalImage.src}) 20% stretch`,
        borderWidth: "30px",
      }}
      className='  h-60 flex items-center justify-center'
    >
      <div
        className={` `}
        style={{ color: "#FFFF00", fontSize: "2rem" }}
      >
        {" "}
        {text}
        {": "}
        <span
          className={` `}
          style={{ color: "#FF0000", fontSize: "2rem" }}
        >
          {number}
        </span>
        <span
          className={` `}
          style={{ color: "#FF0000", fontSize: "2rem" }}
        >
          {abr}
        </span>
      </div>{" "}
    </div>
  );
};

export default DisplayBox;
