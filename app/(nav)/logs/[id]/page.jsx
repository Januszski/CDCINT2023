"use client";
import React from "react";
import { array } from "../../../mockData/logsArray";
import EditField from "@/components/logs/EditField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import FullLog from "@/components/logs/FullLog";
import backgroundImage from "../../../../public/webb-dark.png";

const page = ({ params }) => {
  // const shownLog = array.filter((log) => {
  //   return log.id === Number(params.id);
  // });
  // console.log("SHOWN LOG:", shownLog);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          height: "100vh",
        }}
        className='w-full'
      >
        <FullLog params={params} />
      </div>
    </>
  );
};

export default page;
