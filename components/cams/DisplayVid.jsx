import { useState, useEffect, useRef } from "react";
import "app/globals.css";
import { atom, useAtom } from "jotai";
import { videoAtom, cameraAtom } from "@/app/atom";

const DisplayVid = () => {
  const [video, setVideo] = useAtom(videoAtom);
  const videoRef = useRef();

  console.log("VIDEO", video);

  useEffect(() => {
    videoRef.current?.load();
  }, [video]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",

        //   backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div
        style={{
          border: "20px solid black",
          borderStyle: "inset,",
        }}
      >
        <video
          ref={videoRef}
          width='889'
          height='500'
          controls
          autoPlay
          loop
          muted
          controlsList='nodownload nofullscreen'
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default DisplayVid;
