"use client";

import * as React from "react";
import Map from "../../../components/scada/Map";
import Map2 from "../../../components/scada/Map2";
import { atom, useAtom } from "jotai";
import { isPowerAtom } from "@/app/atom";

import "../../globals.css";
import DisplayBox from "@/components/scada/DisplayBox";
import InputkW from "@/components/scada/InputkW";
import PowerReq from "@/components/scada/PowerReq";
import OutputGauge from "@/components/scada/OutputGauge";

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
        className=' gradientBackground2'
      >
        <div className='min-h-fit gradientBackground2'>
          <div className='flex  gradientBackground2 '>
            <div
              className=''
              style={{
                marginTop: "1vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                flexGrow: 1,
              }}
            >
              <div className='mt-2'>
                <PowerReq />{" "}
              </div>{" "}
              <div>
                {" "}
                <OutputGauge />
              </div>
              <div className='self-center'>
                {" "}
                <InputkW />
              </div>
            </div>
            {/* <button onClick={togglePower}>toggle power</button> */}
            <div className='flex-end'>
              <Map2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
