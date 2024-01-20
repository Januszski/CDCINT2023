import { atom } from "jotai";
import dayjs from "dayjs";

export const logDataAtom = atom();
export const dateAtom = atom(dayjs("02/24/2024"));
export const timeRangeAtom = atom(["12:00 AM", "12:00 AM"]);
export const isPowerAtom = atom(true);
export const mapPosAtom = atom({
  zoom: 18,
  pitch: 25,
  center: { lat: 42.02842, lng: -93.65096 },
});
