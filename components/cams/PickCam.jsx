import React, { useState } from "react";
import { atom, useAtom } from "jotai";
import { videoAtom, cameraAtom } from "@/app/atom";

const PickCam = () => {
  const [video, setVideo] = useAtom(videoAtom);
  const [camera, setCamera] = useAtom(cameraAtom);

  const handleCam1 = () => {
    setCamera(1);
    setVideo(`http://${process.env.NEXT_PUBLIC_CAM_IP}:8000/CooverCam1.mp4`);
  };
  const handleCam2 = () => {
    setCamera(2);
    setVideo(`http://${process.env.NEXT_PUBLIC_CAM_IP}:8000/CooverCam2.mp4`);
  };
  const handleCam3 = () => {
    setCamera(3);
    setVideo(`http://${process.env.NEXT_PUBLIC_CAM_IP}:8000/CooverCam3.mp4`);
  };
  const handleCam4 = () => {
    setCamera(4);
    setVideo(`http://${process.env.NEXT_PUBLIC_CAM_IP}:8000/CooverCam4.mp4`);
  };
  const handleCam5 = () => {
    setCamera(5);
    setVideo(`http://${process.env.NEXT_PUBLIC_CAM_IP}:8000/CooverCam5.mp4`);
  };
  const handleCam6 = () => {
    setCamera(6);
    setVideo(`http://${process.env.NEXT_PUBLIC_CAM_IP}:8000/CooverCam6.mp4`);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
      }}
    >
      <button
        onClick={handleCam1}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          backgroundColor: camera === 1 ? "red" : "black",
          color: "white",
        }}
      >
        CAM 1
      </button>
      <button
        onClick={handleCam2}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          backgroundColor: camera === 2 ? "red" : "black",
          color: "white",
        }}
      >
        CAM 2
      </button>
      <button
        onClick={handleCam3}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          backgroundColor: camera === 3 ? "red" : "black",
          color: "white",
        }}
      >
        CAM 3
      </button>
      <button
        onClick={handleCam4}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          backgroundColor: camera === 4 ? "red" : "black",
          color: "white",
        }}
      >
        CAM 4
      </button>
      <button
        onClick={handleCam5}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          backgroundColor: camera === 5 ? "red" : "black",
          color: "white",
        }}
      >
        CAM 5
      </button>
      <button
        onClick={handleCam6}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          backgroundColor: camera === 6 ? "red" : "black",
          color: "white",
        }}
      >
        CAM 6
      </button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default PickCam;
