"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Zen_Dots } from "next/font/google";
import { Dhurjati } from "next/font/google";

const ZenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});
const Dhuj = Dhurjati({
  subsets: ["latin"],
  weight: "400",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#111827", //C8102E
    },
    secondary: {
      main: "#F1BE48",
    },
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar className=''>
            <Toolbar>
              <Link href='/' className='flex gap-1 '>
                <Image
                  src='/favicon.ico'
                  alt='logo'
                  width={40}
                  height={40}
                  className='object-contain ml-1.5 border-blue-500 '
                />
                {/* <p className='logo_text'>Isetricity Energy</p> */}

                <div
                  className={`${ZenDots.className} text-xl text-lg text-indigo-100`}
                >
                  ISE<span className='text-blue-500'>tricity</span>
                </div>
              </Link>
              <div className='flex-grow'></div>
              <ButtonGroup
                variant='contained'
                aria-label='outlined primary button group'
              >
                <Link href='/scada'>
                  <Button
                    className={`${ZenDots.className} text-xl text-blue-700`}
                  >
                    SCADA
                  </Button>
                </Link>
                <Link href='/logs'>
                  <Button
                    className={`${ZenDots.className} text-xl text-lg text-indigo-100`}
                  >
                    LOGS
                  </Button>
                </Link>
                <Link href='/docs'>
                  <Button
                    className={`${ZenDots.className} text-xl text-lg text-gray-400`}
                  >
                    DOCS
                  </Button>
                </Link>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Container>
          {/* <Box sx={{ my: 2 }}>{[...new Array(12)].map().join("\n")}</Box> */}
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
