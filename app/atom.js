import { atom } from "jotai";
import dayjs from "dayjs";

export const logDataAtom = atom();
export const dateAtom = atom(dayjs("02/24/2024"));
export const timeRangeAtom = atom(["12:00 AM", "12:00 AM"]);
export const mapPosAtom = atom({
  zoom: 18,
  pitch: 25,
  center: { lat: 42.02842, lng: -93.65096 },
});
export const videoAtom = atom(`http://${process.env.NEXT_PUBLIC_CAM_IP}:8000/CooverCam1.mp4`);
export const cameraAtom = atom(1);
export const sliderAtom = atom(0);
