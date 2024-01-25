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
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MakeLog = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    const response = await fetch(`http://${process.env.BACKEND_IP}:8080/logs/new`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: inputValue, // body data type must match "Content-Type" header
    });

    const responseJson = await response.json();

    return responseJson; // parses JSON response into native JavaScript objects
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: "1px solid #00FF41",
        borderRadius: "50px",
        padding: "40px",
        color: "#00FF41",
      }}
    >
      <ThemeProvider theme={theme}>
        <FormControl variant='standard' style={{ color: "#00FF41" }}>
          <InputLabel htmlFor='input-with-icon-adornment'>
            <Typography component='div' color='#00FF41'>
              {"Create Log (write message)"}
            </Typography>
          </InputLabel>
          <Input
            style={{ color: "#00FF41" }}
            onChange={handleInputChange}
            value={inputValue}
            id='input-with-icon-adornment'
            // color="#00FF41"
            //inputProps={{ maxLength: 30 }}
            startAdornment={
              <InputAdornment
                position='start'
                style={{ color: "#00FF41" }}
              ></InputAdornment>
            }
          />
        </FormControl>
        <Button
          onClick={handleSend}
          variant='contained'
          endIcon={<SendIcon style={{ color: "#00FF41" }} />}
        >
          <Typography component='div' color='#00FF41'>
            Send
          </Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default MakeLog;
