import "./Navbar.css";
import audioFile from "../../images/West End Girls.m4a";
import SeekBar from "../Player/SeekBar";
import { useRef, useState } from "react";
import NavbarButton from "./NavbarButton";
import { mdiPlay } from "@mdi/js";

function Navbar() {
    const [playPos, setPlayPos] = useState(0);
    const [playLen, setPlayLen] = useState(1);
    const [isSeeking, setSeeking] = useState(false);

    const audioPlayer = useRef();

    return (
        <div className="navbar" id="navbar">
            <SeekBar
                value={playPos}
                max={playLen}
                onChange={(value, seeking) => {
                    setPlayPos(value);
                    setSeeking(seeking);
                }}
                onSeek={(value) => {
                    setSeeking(false);
                    audioPlayer.current.currentTime = value;
                }}
            />
            <div className="navbarButtons">
                <audio
                    ref={audioPlayer}
                    // controls
                    src={audioFile}
                    onTimeUpdate={(e) => {
                        if (!isSeeking) setPlayPos(e.target.currentTime);
                    }}
                    onDurationChange={(e) => {
                        setPlayLen(e.target.duration);
                    }}
                ></audio>
                <NavbarButton>Text</NavbarButton>
                <NavbarButton icon={mdiPlay}>Text</NavbarButton>
            </div>
        </div>
    );
}

export default Navbar;
