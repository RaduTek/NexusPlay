import { atom } from "jotai";

export const mobileView = atom(false);

export const playerStatus = atom(1); // Paused
export const playerCurrentTime = atom(0);
export const playerSeekTime = atom(0);
export const playerTotalTime = atom(0);

export const nowPlayingDragY = atom(0);
export const nowPlayingVisible = atom(false);
