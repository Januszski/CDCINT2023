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

const InputkW = () => {
  const [inputValue, setInputValue] = useAtom(sliderAtom);

  const handleSliderChange = (event, newValue) => {
    setInputValue(newValue);
  };

  const handleSend = async () => {
    const inputObj = { percentage: Number(inputValue) };
    const response = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_IP}:8080/generator/update`, {
      method: "POST", 
     
      headers: {
        "Content-Type": "application/json",
      },
     
      body: JSON.stringify(inputObj), 
    });

    const responseJson = await response.json();

  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFF00",
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
