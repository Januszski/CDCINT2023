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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00FF41", 
        secondary: "#00FF41",
      },
      secondary: {
        main: "#00FF41",
        dark: false,
        light: true,
      },
    },
  });

  return (
    <>
      <div className='mt-5'>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={dayjs(date)}
              onChange={(newValue) => setDate(newValue)}
              sx={{
                "& .MuiTypography-caption": {
                  color: "#00FF41", 
                },
                "& .MuiPickersCalendarHeader-switchViewButton": {
                  color: "#00FF41", 
                },
                "& .MuiPickersCalendarHeader-switchViewIcon": {
                  color: "#00FF41", 
                },
                "& .MuiPickersCalendarHeader-root": {
                  color: "#00FF41", 
                },
                "& .MuiPickersCalendarHeader-labelContainer": {
                  color: "#00FF41",
                },
                "& .MuiPickersCalendarHeader-label": {
                  color: "#00FF41", 
                },
                "& .MuiPickersDay-root": {
                  color: "#00FF41", 
                },
                "& .MuiDatePickerToolbar-root": {
                  color: "#00FF41", 
                },
                "& .MuiDatePickerToolbar-title": {
                  color: "#00FF41", 
                },
                "& .MuiPickersShortcuts-root": {
                  color: "#00FF41", 
                },
                "& .MuiPickersShortcuts-root": {
                  color: "#00FF41", 
                },
                "& .MuiPickersShortcuts-padding": {
                  color: "#00FF41", 
                },
                "& .MuiPickersShortcuts-dense": {
                  color: "#00FF41", 
                },
                "& .MuiPickersShortcuts-subheader": {
                  color: "#00FF41", 
                },
                "& .MuiPickersActionBar-root": {
                  color: "#00FF41", 
                },
                "& .MuiPickersActionBar-spacing": {
                  color: "#00FF41",
                },
                "& .MuiDatePickerToolbar-root": {
                  color: "#00FF41", 
                },
                "& .MuiButton-root": {
                  color: "#00FF41",
                },
                "& .MuiButton-text": {
                  color: "#00FF41", 
                },
                "& .MuiButton-textPrimary": {
                  color: "#00FF41", 
                },
                "& .MuiButton-textSizeSmall": {
                  color: "#00FF41", 
                },
                "& .MuiButton-textSizeLarge": {
                  color: "#00FF41", 
                },
                "& .MuiButtonBase-root": {
                  color: "#00FF41", 
                },
                color: "#00FF41",
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </>
  );
}
