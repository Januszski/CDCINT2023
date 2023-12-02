import { atom, useAtom } from "jotai";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { dateAtom, timeRangeAtom } from "@/app/atom";
import { createTheme, ThemeProvider } from "@mui/material";

export default function DateCalendarValue() {
  const [date, setDate] = useAtom(dateAtom);
  const [time, setTime] = useAtom(timeRangeAtom);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  console.log("date value", date);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#111827", //C8102E
      },
      secondary: {
        main: "#F1BE48",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={dayjs(date)}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
