import { useEffect, useRef } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { PlaybackStatus } from "../../Globals";
import {
    playerStatus,
    playerCurrentTime,
    playerTotalTime,
    playerSeekTime,
} from "../../Atoms";
import audioFile from "../../images/West End Girls.m4a";

function AudioPlayer() {
    const [getStatus, setStatus] = useAtom(playerStatus);
    const seekTime = useAtomValue(playerSeekTime);
    const setCurrentTime = useSetAtom(playerCurrentTime);
    const setTotalTime = useSetAtom(playerTotalTime);

    const audioPlayer = useRef();

    useEffect(() => {
        audioPlayer.current.currentTime = seekTime;
    }, [audioPlayer, seekTime]);

    useEffect(() => {
        if (getStatus === 0) audioPlayer.current.play();
        else if (getStatus === 1) audioPlayer.current.pause();
    }, [audioPlayer, getStatus]);

    const updatePlaybackStatus = (event) => {
        const status = PlaybackStatus.indexOf(event.type);
        if (status !== -1) {
            setStatus(status);
        }
    };

    return (
        <audio
            autoPlay={false}
            ref={audioPlayer}
            src={audioFile}
            onPlay={updatePlaybackStatus}
            onPause={updatePlaybackStatus}
            onEnded={updatePlaybackStatus}
            onTimeUpdate={(e) => {
                setCurrentTime(e.target.currentTime);
            }}
            onDurationChange={(e) => {
                setTotalTime(e.target.duration);
            }}
        ></audio>
    );
}

export default AudioPlayer;
