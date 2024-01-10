"use client";

import { atom, useAtom } from "jotai";
import * as React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { dateAtom, timeRangeAtom } from "@/app/atom";
import Calendar from "@/components/logs/Calendar";
import Slider from "@/components/logs/Slider";
import TimeBox from "@/components/logs/TimeBox";
import backgroundImage from "../../../public/webb-dark.png";
import CardGrid from "@/components/logs/CardGrid";
import { array } from "../../mockData/logsArray";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [time, setTime] = useAtom(timeRangeAtom);
  console.log("TIME", time);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
        className='w-full min-h-screen'
      >
        <div className='flex-row flex '>
          <div className=' check  max-w-min '>
            <div>
              <Calendar />
            </div>
            <TimeBox time={time[0]} />

            <TimeBox time={time[1]} />
            <div className='mt-3 ml-3'>
              <Slider />
            </div>
          </div>

          <div className='scroll-container'>
            {/* Container with a fixed height and overflow auto */}
            <div className='card-grid-container'>
              <CardGrid array={array} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
