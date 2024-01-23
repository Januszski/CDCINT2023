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
import MakeLog from "@/components/logs/MakeLog";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [time, setTime] = useAtom(timeRangeAtom);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          height: "95vh",
        }}
        className='w-full '
      >
        <div
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
          className='min-h-fit'
        >
          <div className='flex-row flex '>
            <div className='   max-w-min '>
              <div>
                <Calendar />
              </div>
              <TimeBox time={time[0]} />

              <TimeBox time={time[1]} />
              <div className='mt-3 ml-3'>
                <Slider />
              </div>
              <div>
                <MakeLog />
              </div>
            </div>

            <div className='scroll-container'>
              {/* Container with a fixed height and overflow auto */}
              <div className='card-grid-container flex '>
                <CardGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
