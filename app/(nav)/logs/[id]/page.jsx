"use client";
import React from "react";
import { array } from "../../../mockData/logsArray";
import EditField from "@/components/logs/EditField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import FullLog from "@/components/logs/FullLog";

const page = ({ params }) => {
  // const shownLog = array.filter((log) => {
  //   return log.id === Number(params.id);
  // });
  // console.log("SHOWN LOG:", shownLog);

  return (
    <>
      <FullLog />
    </>
  );
};

export default page;
