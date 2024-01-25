import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import { atom, useAtom } from "jotai";
import { dateAtom, timeRangeAtom, logDataAtom } from "@/app/atom";
import dayjs from "dayjs";
import Link from "next/link";
import { useState, useEffect } from "react";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [date, setDate] = useAtom(dateAtom);
  const [time, setTime] = useAtom(timeRangeAtom);
  const [data, setData] = useAtom(logDataAtom);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_IP}:8080/logs/all`, {
        method: "GET",
      });
      const dataJSON = await response.json();

      setData(dataJSON);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00FF41",
        secondary: "#00FF41",
      },
      secondary: {
        main: "#00FF41",
        dark: false,
        light: true,
      },
    },
  });

  if (data !== undefined) {
    data.sort(function (a, b) {
      return a.time.localeCompare(b.time);
    });
  }

  let finalShownLogs = [];
  if (data !== undefined) {
    const shownLogs = data.filter(getLogsForDate);
    finalShownLogs = shownLogs.filter(getLogsForTime);
  }

  function getLogsForTime(log) {
    let timeLow = Number(time[0].split(":")[0]);
    let timeHigh = Number(time[1].split(":")[0]);

    const signLow = time[0].substr(time[0].length - 2);
    const signHigh = time[1].substr(time[1].length - 2);

    if (signLow === "PM" && timeLow !== 12) {
      timeLow += 12;
    }
    if (signHigh === "PM" && timeHigh !== 12) {
      timeHigh += 12;
    }

    if (timeHigh === 12 && signHigh === "AM") {
      timeHigh = 24;
    }
    if (timeLow === 12 && signLow == "AM") {
      timeLow = 0;
    }

    const logHour = Number(log.time.split(":")[0]);
    const logMinute = Number(log.time.split(":")[1]);
    const logSecond = Number(log.time.split(":")[2]);

    if (logHour < timeLow || logHour > timeHigh) {
      return false;
    }

    if (logHour === timeHigh && (logMinute > 0 || logSecond > 0)) {
      return false;
    }

    return true;
  }

  function getLogsForDate(log) {
    const logDate = log.date;
    let monthVal = date.$M + 1;
    monthVal = monthVal?.toString();
    let dayVal = date.$D?.toString();
    if (monthVal.length == 1) {
      monthVal = "0" + monthVal;
    }
    if (dayVal?.length == 1) {
      dayVal = "0" + date.$D;
    }

    if (
      date.$y.toString() === logDate.slice(0, 4) &&
      monthVal === logDate.slice(5, 7) &&
      dayVal === logDate.slice(8, 10)
    ) {
      return true;
    } else return false;
  }

  return (
    <div style={{ maxHeight: "95vh" }} className=' justify-end mt-2'>
      <div>
        <Grid container flexDirection='row' columns={6} id='log-grid'>
          {finalShownLogs.length === 0 ? (
            <div
              className={` flex items-center justify-center`}
              style={{ color: "#00FF41", fontSize: "2rem", marginTop: "15px" }}
            >
              {" "}
              No logs found for this date/time{" "}
            </div>
          ) : (
            ""
          )}
          {finalShownLogs?.map((log) => {
            return (
              <div className='m-1.5' key={log.id}>
                <ThemeProvider theme={theme}>
                  <Card
                    sx={{ minWidth: 225, maxWidth: 250 }}
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid #00FF41", // Set the border style and width
                      borderRadius: "50px",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color='#00FF41'
                        gutterBottom
                      >
                        {log.date}
                        {"    "}
                        {log.time}
                      </Typography>
                      <Typography variant='h5' component='div' color='#00FF41'>
                        {log.level}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color='#00FF41'>
                        {log.className}
                      </Typography>
                      <Typography variant='body2' color='#00FF41'>
                        {log.message}
                        <br />
                        {log.comment}
                      </Typography>
                    </CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardActions>
                        <Link
                          href={`/logs/${log.id}`}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          <Button size='small'>Inspect</Button>
                        </Link>
                      </CardActions>
                    </div>
                  </Card>
                </ThemeProvider>
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
