import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { sliderAtom } from "@/app/atom";
import { atom, useAtom } from "jotai";

//#1942b3
const InputkW = () => {
  const [inputValue, setInputValue] = useAtom(sliderAtom);

  const handleSliderChange = (event, newValue) => {
    console.log("NEW VALUE");
    setInputValue(newValue);
  };

  const handleSend = async () => {
    const inputObj = { percentage: Number(inputValue) };
    const response = await fetch(`http://${process.env.BACKEND_IP}:8080/generator/update`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(inputObj), // body data type must match "Content-Type" header
    });

    const responseJson = await response.json();

    // return responseJson; // parses JSON response into native JavaScript objects
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFF00", //C8102E
        secondary: "#FFFF00",
      },
      secondary: {
        main: "#FFFF00",
        dark: false,
        light: true,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
      >
        {/* <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
          <OutlinedInput
            id='outlined-adornment-weight'
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            endAdornment={<InputAdornment position='end'>kW</InputAdornment>}
            aria-describedby='outlined-weight-helper-text'
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id='outlined-weight-helper-text'>
            Generate &#x26A1;
          </FormHelperText>
        </FormControl> */}
      </Box>
      <div style={{ color: "#FFFF00" }}>
        Produce at % Capacity (100% = 750kW)
      </div>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        sx={{ width: 300 }}
      >
        <Slider
          defaultValue={inputValue}
          onChange={handleSliderChange}
          aria-label='Default'
          valueLabelDisplay='auto'
        />
        <span className='mb-5 ml-2'>
          <Button
            onClick={handleSend}
            variant='contained'
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </span>
      </Box>
    </ThemeProvider>
  );
};

export default InputkW;
