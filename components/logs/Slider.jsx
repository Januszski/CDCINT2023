import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { dateAtom, timeRangeAtom } from "@/app/atom";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 4.16666666667;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([0, 100]); 

  const [time, setTime] = useAtom(timeRangeAtom); 

  let t = time;

  let strTime = "";

  function sliderToTime(val) {
    if (val === 100) {
      return "12:00 AM";
    } else if (val > 95) {
      return "11:00 PM";
    } else if (val > 91) {
      return "10:00 PM";
    } else if (val > 87) {
      return "9:00 PM";
    } else if (val > 83) {
      return "8:00 PM";
    } else if (val > 79) {
      return "7:00 PM";
    } else if (val >= 75) {
      return "6:00 PM";
    } else if (val > 70) {
      return "5:00 PM";
    } else if (val > 66) {
      return "4:00 PM";
    } else if (val > 62) {
      return "3:00 PM";
    } else if (val > 58) {
      return "2:00 PM";
    } else if (val > 54) {
      return "1:00 PM";
    } else if (val >= 50) {
      return "12:00 PM";
    } else if (val > 45) {
      return "11:00 AM";
    } else if (val > 41) {
      return "10:00 AM";
    } else if (val > 37) {
      return "9:00 AM";
    } else if (val > 33) {
      return "8:00 AM";
    } else if (val > 29) {
      return "7:00 AM";
    } else if (val >= 25) {
      return "6:00 AM";
    } else if (val > 20) {
      return "5:00 AM";
    } else if (val > 16) {
      return "4:00 AM";
    } else if (val > 12) {
      return "3:00 AM";
    } else if (val > 8) {
      return "2:00 AM";
    } else if (val > 4) {
      return "1:00 AM";
    } else {
      return "12:00 AM";
    }
  }

  useEffect(() => {
    setTime([sliderToTime(value2[0]), sliderToTime(value2[1])]);
  }, [value2]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

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
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value2}
          onChange={handleChange2}
          getAriaValueText={valuetext}
          step={4.16666666667}
          disableSwap
        />
      </Box>
    </ThemeProvider>
  );
}
