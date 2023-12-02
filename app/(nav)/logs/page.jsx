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

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [time, setTime] = useAtom(timeRangeAtom);
  console.log("TIME", time);

  return (
    <>
      <div className='flex-row flex '>
        <div className='flex-start flex-col  check min-content max-w-min'>
          <div>
            <Calendar />
          </div>
          <TimeBox time={time[0]} />
          <TimeBox time={time[1]} />

          <Slider />
        </div>

        <span> aa</span>
      </div>
    </>
  );
};

export default page;
