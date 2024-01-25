"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import backgroundImage from "../../public/BG58.jpeg";
import metalImage from "../../public/metal1.jpeg";
import { useState, useEffect } from "react";


const TimeBox = ({ time }) => {
  const [displayedTime, setDisplayedTime] = useState(getRandomTime());
  const [initialPhaseCompleted, setInitialPhaseCompleted] = useState(false);
  const transitionDelay = 500; 
  const initialUpdateInterval = 1; 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (!initialPhaseCompleted) {
      const randomNumbersInterval = setInterval(() => {
        setDisplayedTime(getRandomTime());
      }, initialUpdateInterval);

      const timeout = setTimeout(() => {
        clearInterval(randomNumbersInterval); 
        setDisplayedTime(time);
        setInitialPhaseCompleted(true);
      }, transitionDelay);

      return () => {
        clearInterval(randomNumbersInterval);
        clearTimeout(timeout);
      };
    }
  }, [time, initialPhaseCompleted]);

  function getRandomTime() {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  }

  return (
    <>
      {" "}
      <Container maxWidth='sm'>
        <div
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            borderImage: `url(${metalImage.src}) 20% stretch`,
            borderWidth: "40px",
          }}
          className='  h-60 flex items-center justify-center'
        >
          <div
            className={` `}
            style={{ color: "#00FF41", fontSize: "2rem" }}
          >
            {" "}
            {isClient ? (initialPhaseCompleted ? time : displayedTime) : ""}
          </div>{" "}
        </div>{" "}
      </Container>
    </>
  );
};

export default TimeBox;
