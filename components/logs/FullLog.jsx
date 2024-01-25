import React from "react";
// import EditField from "@/components/logs/EditField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import { atom, useAtom } from "jotai";
import { dateAtom, timeRangeAtom, logDataAtom } from "@/app/atom";
import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";

const FullLog = ({ params }) => {
  const [data, setData] = useState("");
  const [textValue, setTextValue] = useState("");
  const [fetchNow, setFetchNow] = useState(false);

  const handleSend = async () => {
    const response = await fetch(
      `http://${process.env.BACKEND_IP}:8080/logs/${params.id}/comment`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: textValue ? textValue : " ", // body data type must match "Content-Type" header
      }
    );
    setFetchNow((prevState) => !prevState);
    return response.json(); // parses JSON response into native JavaScript objects
  };

  let shownLog = data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from /logs/all
        const response = await fetch(`http://${process.env.BACKEND_IP}:8080/logs/${params.id}`);
        const dataJSON = await response.json();

        // Handle the fetched data as needed
        console.log(dataJSON);
        setData(dataJSON);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every minute (60000 milliseconds)
    const intervalId = setInterval(fetchData, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [fetchNow]); // Empty dependency array to run the effect only once on mount

  // if (data !== undefined) {
  //   const shownLog = data.filter((log) => {
  //     console.log("LOG", log);
  //     console.log("PARAM", params.id);
  //     console.log("RETURNED", log.id === Number(params.id));

  //     return log.id === Number(params.id);
  //   });
  //   console.log("SHOWN LOG:", shownLog);
  // }

  const handleInputChange = (event) => {
    setTextValue(event.target.value);
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
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",

            //   backgroundImage: `url(${backgroundImage.src})`,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid #00FF41",
              borderRadius: "50px",
              padding: "75px",
              color: "#00FF41",
            }}
          >
            <br />
            <div style={{}}>id: {data && shownLog.id}</div>
            <br />
            <div>date: {data && shownLog.date}</div>
            <br />
            <div>time: {data && shownLog.time}</div>
            <br />
            <div>level: {data && shownLog.level}</div>
            <br />
            <div>message: {data && shownLog.message}</div>
            <br />
            <div>className: {data && shownLog.className}</div>
            <br />
            <div>comment: {data && shownLog.comment}</div>
            <br />
            <div>dateCommented: {data && shownLog.dateCommented}</div>
            <br />
            <div>timeCommented: {data && shownLog.timeCommented}</div>
            <br />
            <FormControl variant='standard' style={{ color: "#00FF41" }}>
              <InputLabel htmlFor='input-with-icon-adornment'>
                <Typography component='div' color='#00FF41'>
                  {data && shownLog.comment ? "Edit comment" : "Add comment"}
                </Typography>
              </InputLabel>
              <Input
                style={{ color: "#00FF41" }}
                onChange={handleInputChange}
                value={textValue}
                id='input-with-icon-adornment'
                // color="#00FF41"
                //inputProps={{ maxLength: 30 }}
                startAdornment={
                  <InputAdornment position='start' style={{ color: "#00FF41" }}>
                    <AccountCircle />
                  </InputAdornment>
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
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default FullLog;
