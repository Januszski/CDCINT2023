"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import backgroundImage from "../../public/BG58.jpeg";
import metalImage from "../../public/metal1.jpeg";
import { Black_Ops_One } from "next/font/google";
import { useState, useEffect } from "react";

const clock = Black_Ops_One({ subsets: ["latin"], weight: "400" });

//#00FF41
const TimeBox = ({ time }) => {
  const [displayedTime, setDisplayedTime] = useState(getRandomTime());
  const [initialPhaseCompleted, setInitialPhaseCompleted] = useState(false);
  const transitionDelay = 500; // Transition to actual time after 2000 milliseconds
  const initialUpdateInterval = 1; // Update displayed time every 100 milliseconds during initial phase
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (!initialPhaseCompleted) {
      // Set an interval to update displayed time with random numbers during the initial phase
      const randomNumbersInterval = setInterval(() => {
        setDisplayedTime(getRandomTime());
      }, initialUpdateInterval);

      // Set a timeout to transition to the actual time after the initial phase
      const timeout = setTimeout(() => {
        clearInterval(randomNumbersInterval); // Clear the interval when transitioning to the actual time
        setDisplayedTime(time);
        setInitialPhaseCompleted(true);
      }, transitionDelay);

      // Cleanup intervals and timeout on component unmount
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
            className={`${clock.className} `}
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
