import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import backgroundImage from "../../public/BG58.jpeg";
import metalImage from "../../public/metal1.jpeg";

//#00FF41
const TimeBox = ({ time }) => {
  return (
    <>
      {" "}
      <Container maxWidth='sm'>
        <div
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            borderImage: `url(${metalImage.src}) 20% stretch`,
            borderWidth: "40px",
          }}
          className='  h-60 flex items-center justify-center'
        >
          <div className=' ' style={{ color: "#00FF41" }}>
            {" "}
            {time}
          </div>{" "}
        </div>{" "}
      </Container>
    </>
  );
};

export default TimeBox;
