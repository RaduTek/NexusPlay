import { atom } from "jotai";

export const playerStatus = atom(1); // Paused
export const playerCurrentTime = atom(0);
export const playerSeekTime = atom(0);
export const playerTotalTime = atom(0);

export const nowPlayingVisible = atom(false);
export const sideBarVisible = atom(false);
