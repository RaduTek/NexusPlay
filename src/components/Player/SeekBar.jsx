import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
    playerCurrentTime,
    playerSeekTime,
    playerTotalTime,
} from "../../Atoms";
import "./SeekBar.css";
export const PlaybackStatus = ["play", "pause", "ended"];

function SeekBar() {
    const [seeking, setSeeking] = useState(false);
    const [value, setValue] = useState(0);
    const currentTime = useAtomValue(playerCurrentTime);
    const setSeekTime = useSetAtom(playerSeekTime);
    const totalTime = useAtomValue(playerTotalTime);

    const allowedKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    const valueChange = (e) => {
        setValue(e.target.value);
    };

    const startSeeking = (e) => {
        if (
            e.type === "mousedown" ||
            e.type === "touchstart" ||
            (e.type === "keydown" && allowedKeys.indexOf(e.key) !== -1)
        )
            setSeeking(true);
    };

    const endSeeking = (e) => {
        if (
            e.type === "mouseup" ||
            e.type === "touchend" ||
            (e.type === "keyup" && allowedKeys.indexOf(e.key) !== -1)
        ) {
            setSeeking(false);
            setSeekTime(e.target.value);
        }
    };

    useEffect(() => {
        if (!seeking) setValue(currentTime);
    }, [currentTime, seeking, value]);

    return (
        <div className="seekBar">
            <div className="progressBarWrapper">
                <progress
                    className="progressBar"
                    min={0}
                    value={value}
                    max={totalTime}
                ></progress>
            </div>
            <input
                className="seekThumb"
                value={value}
                min={0}
                max={totalTime}
                onChange={valueChange}
                onMouseDown={startSeeking}
                onMouseUp={endSeeking}
                onKeyDown={startSeeking}
                onKeyUp={endSeeking}
                onTouchStart={startSeeking}
                onTouchEnd={endSeeking}
                type="range"
                step="1"
            ></input>
        </div>
    );
}

export default SeekBar;
