"use client";

import * as React from "react";
import Map from "../../../components/scada/Map";
import Map2 from "../../../components/scada/Map2";
import { atom, useAtom } from "jotai";
import { isPowerAtom } from "@/app/atom";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPower, setIsPower] = useAtom(isPowerAtom);
  const togglePower = () => {
    setIsPower((prev) => !prev);
    console.log("CLICKED");
    console.log("STATE", isPower);
  };
  return (
    <>
      <div className='flex flex-end'>
        <div style={{ width: "25vw", height: "95vh" }}> aaaa</div>
        <button onClick={togglePower}>toggle power</button>
        <Map2 />
      </div>
    </>
  );
};

export default page;
