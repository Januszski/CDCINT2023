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
        main: "#FFFFFF", //C8102E
        secondary: "#FFFFFF",
      },
      secondary: {
        main: "#FFFFFF",
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
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-switchViewButton": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-switchViewIcon": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-labelContainer": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersCalendarHeader-label": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersDay-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiDatePickerToolbar-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiDatePickerToolbar-title": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-padding": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-dense": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersShortcuts-subheader": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersActionBar-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiPickersActionBar-spacing": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiDatePickerToolbar-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiButton-root": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiButton-text": {
                  color: "white", // Change this to your desired color for month text
                },
                "& .MuiButton-textPrimary": {
                  color: "white", // Change this to your desired color for the button text
                },
                "& .MuiButton-textSizeSmall": {
                  color: "white", // Change this to your desired color for the button text
                },
                "& .MuiButton-textSizeLarge": {
                  color: "white", // Change this to your desired color for the button text
                },
                "& .MuiButtonBase-root": {
                  color: "white", // Change this to your desired color for the button icon
                },
                color: "primary.main",
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </>
  );
}
