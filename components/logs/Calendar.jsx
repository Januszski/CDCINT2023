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
  // console.log("date value", date);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00FF41", //C8102E
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
      <div className=''>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={dayjs(date)}
              onChange={(newValue) => setDate(newValue)}
              sx={{
                "& .MuiTypography-caption": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-switchViewButton": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-switchViewIcon": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-labelContainer": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-label": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersDay-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiDatePickerToolbar-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiDatePickerToolbar-title": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-padding": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-dense": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-subheader": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersActionBar-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiPickersActionBar-spacing": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiDatePickerToolbar-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiButton-root": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiButton-text": {
                  color: "#00FF41", // Change this to your desired color for month text
                },
                "& .MuiButton-textPrimary": {
                  color: "#00FF41", // Change this to your desired color for the button text
                },
                "& .MuiButton-textSizeSmall": {
                  color: "#00FF41", // Change this to your desired color for the button text
                },
                "& .MuiButton-textSizeLarge": {
                  color: "#00FF41", // Change this to your desired color for the button text
                },
                "& .MuiButtonBase-root": {
                  color: "#00FF41", // Change this to your desired color for the button icon
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
