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
import { dateAtom, timeRangeAtom } from "@/app/atom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({ array }) {
  const [date, setDate] = useAtom(dateAtom);
  console.log("Cal date", date);
  console.log("cal date DAY", date.$D);
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

  array.sort(function (a, b) {
    return a.time.localeCompare(b.time);
  });

  const shownLogs = array.filter(getLogsForDate);

  function getLogsForDate(log) {
    const logDate = log.date;
    let monthVal = date.$M + 1;
    monthVal = monthVal.toString();
    let dayVal = date.$D?.toString();
    if (monthVal.length == 1) {
      monthVal = "0" + monthVal;
    }
    if (dayVal?.length == 1) {
      dayVal = "0" + date.$D;
    }

    console.log("MONTHVAL", monthVal);
    console.log("DAYVAL", dayVal);
    console.log("YEAR", date.$y);
    console.log("LOGDATE", logDate);

    console.log("CHECKS:");
    console.log(
      `DOES ${date.$y} = ${logDate.slice(0, 4)}?`,
      date.$y === logDate.slice(0, 4)
    );

    if (
      date.$y.toString() === logDate.slice(0, 4) &&
      monthVal === logDate.slice(5, 7) &&
      dayVal === logDate.slice(8, 10)
    ) {
      return true;
    } else return false;
  }

  return (
    <div className='max-h-screen'>
      <Grid container flexDirection='row' columns={6} id='log-grid'>
        {shownLogs?.map((log) => {
          //console.log("LOG", log);
          return (
            <div className='m-1.5' key={log.id}>
              <ThemeProvider theme={theme}>
                <Card
                  sx={{ minWidth: 275, maxWidth: 350 }}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid #00FF41", // Set the border style and width
                    borderRadius: "50px",
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
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </ThemeProvider>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
