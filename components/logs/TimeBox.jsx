import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const TimeBox = ({ time }) => {
  return (
    <>
      {" "}
      <Container maxWidth='sm'>
        <div className=' border-2 border-purple-700 h-60 flex items-center justify-center'>
          <div className=' '> {time}</div>{" "}
        </div>{" "}
      </Container>
    </>
  );
};

export default TimeBox;
