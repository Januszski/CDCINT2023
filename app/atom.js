import { atom } from "jotai";
import dayjs from "dayjs";

export const dateAtom = atom(dayjs("02/24/2024"));
export const timeRangeAtom = atom(["12:00 AM", "12:00 AM"]);
