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

//#1942b3
const InputkW = () => {
  const [inputValue, setInputValue] = useState("");

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
        <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
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
        </FormControl>
        <span className='mb-5'>
          <Button variant='contained' endIcon={<SendIcon />}>
            Send
          </Button>
        </span>
      </Box>
    </ThemeProvider>
  );
};

export default InputkW;
