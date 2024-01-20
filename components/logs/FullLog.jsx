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

import { useState, useEffect } from "react";

const FullLog = ({ params }) => {
  const [data, setData] = useAtom(logDataAtom);
  const [textValue, setTextValue] = useState("");

  console.log("TEXTVAL", textValue);

  const handleSend = async (commentText) => {
    const response = await fetch(`http://localhost:8080/${params.id}/comment`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: textValue, // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from /logs/all
        const response = await fetch(`http://localhost:8080/logs/${params.id}`);
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
    const intervalId = setInterval(fetchData, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  if (data !== undefined) {
    const shownLog = data.filter((log) => {
      console.log("LOG", log);
      console.log("PARAM", params.id);
      console.log("RETURNED", log.id === Number(params.id));

      return log.id === Number(params.id);
    });
    console.log("SHOWN LOG:", shownLog);
  }

  const handleInputChange = (event) => {
    setTextValue(event.target.value);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          // backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <div>
          <br />
          <div>id: {data && shownLog[0].id}</div>
          <br />
          <div>date: {data && shownLog[0].date}</div>
          <br />
          <div>time: {data && shownLog[0].time}</div>
          <br />
          <div>level: {data && shownLog[0].level}</div>
          <br />
          <div>message: {data && shownLog[0].message}</div>
          <br />
          <div>className: {data && shownLog[0].className}</div>
          <br />
          <div>comment: {data && shownLog[0].comment}</div>
          <br />
          <div>dateCommented: {data && shownLog[0].dateCommented}</div>
          <br />
          <div>timeCommented: {data && shownLog[0].timeCommented}</div>
          <br />
          <FormControl variant='standard'>
            <InputLabel htmlFor='input-with-icon-adornment'>
              Edit comment
            </InputLabel>
            <Input
              onChange={handleInputChange}
              value={textValue}
              id='input-with-icon-adornment'
              //inputProps={{ maxLength: 30 }}
              startAdornment={
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant='contained' endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default FullLog;