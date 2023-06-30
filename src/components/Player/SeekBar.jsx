import { useState } from "react";
import "./PlayerScrubber.css";

function SeekBar({ value, max, onChange, onSeek }) {
    const [seeking, setSeeking] = useState(false);

    const onSeekValueChange = (event) => {
        onChange(event.target.value, seeking);
    };

    const allowedKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    const startSeeking = (event) => {
        if (
            event.type === "mousedown" ||
            event.type === "touchstart" ||
            (event.type === "keydown" && allowedKeys.indexOf(event.key) !== -1)
        )
            setSeeking(true);
    };

    const endSeeking = (event) => {
        if (
            event.type === "mouseup" ||
            event.type === "touchend" ||
            (event.type === "keyup" && allowedKeys.indexOf(event.key) !== -1)
        ) {
            setSeeking(false);
            onSeek(event.target.value);
        }
    };

    return (
        <div className="seekBar">
            <div className="progressBarWrapper">
                <progress
                    className="progressBar"
                    min={0}
                    value={value}
                    max={max}
                ></progress>
            </div>
            <input
                className="seekThumb"
                value={value}
                min={0}
                max={max}
                onChange={onSeekValueChange}
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
