import { atom } from "jotai";

export const viewType = atom("full");

export const playerStatus = atom(1); // Paused
export const playerCurrentTime = atom(0);
export const playerSeekTime = atom(0);
export const playerTotalTime = atom(0);

export const mobilePlayingDragY = atom(0);
export const mobilePlayingVisible = atom(false);

export const fullPlayingVisible = atom(false);
