import * as React from "react";
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

//#1942b3
const InputkW = () => {
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
      <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
        <OutlinedInput
          id='outlined-adornment-weight'
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
    </ThemeProvider>
  );
};

export default InputkW;
