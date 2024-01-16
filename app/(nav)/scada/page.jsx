"use client";

import * as React from "react";
import Map from "../../../components/scada/Map";
import Map2 from "../../../components/scada/Map2";
import { atom, useAtom } from "jotai";
import { isPowerAtom } from "@/app/atom";

import "../../globals.css";
import DisplayBox from "@/components/scada/DisplayBox";
import InputkW from "@/components/scada/InputkW";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPower, setIsPower] = useAtom(isPowerAtom);
  const togglePower = () => {
    setIsPower((prev) => !prev);
  };
  return (
    <>
      <div
        style={{
          maxHeight: "95vh",
        }}
        className='w-full gradientBackground2'
      >
        <div style={{}} className='min-h-fit gradientBackground2'>
          <div className='flex flex-end gradientBackground2'>
            <div className='flex-col self-start'>
              <div className='' style={{ marginTop: "1vh" }}>
                <DisplayBox text={"POWER REQUIRED"} number={50} abr={"kW"} />
              </div>
              <div>
                {" "}
                <DisplayBox text={"CURRENT OUTPUT"} number={65} abr={"kW"} />
                <DisplayBox text={"CURRENT POWER %"} number={79} abr={"%"} />
                <InputkW />
              </div>
            </div>
            <button onClick={togglePower}>toggle power</button>
            <Map2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
