"use client";

import * as React from "react";
import Map from "../../../components/scada/Map";
import Map2 from "../../../components/scada/Map2";
import { atom, useAtom } from "jotai";
import { isPowerAtom } from "@/app/atom";
import TimeBox from "@/components/scada/DisplayBox";

import "../../globals.css";
import DisplayBox from "@/components/scada/DisplayBox";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPower, setIsPower] = useAtom(isPowerAtom);
  const togglePower = () => {
    setIsPower((prev) => !prev);
  };
  return (
    <>
      <div className='flex flex-end gradientBackground2'>
        <div className='self-start'>
          <DisplayBox text={"POWER REQUIRED"} number={50} />
        </div>
        {/* <button onClick={togglePower}>toggle power</button> */}
        <Map2 />
      </div>
    </>
  );
};

export default page;
