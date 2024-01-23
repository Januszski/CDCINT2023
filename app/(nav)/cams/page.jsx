"use client";

import DisplayVid from "@/components/cams/DisplayVid";
import React from "react";
import backgroundImage from "public/cams/glitchbackground.jpg";
import PickCam from "@/components/cams/PickCam";

const page = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr", // Adjust the column sizes as needed
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "95vh",
        }}
        className='w-full'
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            marginLeft: "30px",
          }}
        >
          <PickCam />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <DisplayVid />
        </div>
      </div>
    </>
  );
};

export default page;
