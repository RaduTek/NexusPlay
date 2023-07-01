import "./Navbar.css";
import NavSeekBar from "../../Player/NavSeekBar";
import CircleButton from "../../UI/CircleButton";
import {
    mdiAccountCircleOutline,
    mdiBookshelf,
    mdiDotsVertical,
    mdiHomeOutline,
    mdiMagnify,
    mdiPause,
    mdiPlay,
    mdiPlaylistMusicOutline,
    mdiRepeat,
    mdiShuffle,
    mdiSkipNextOutline,
    mdiSkipPreviousOutline,
    mdiStop,
    mdiVolumeHigh,
} from "@mdi/js";
import SquareButton from "../../UI/SquareButton";
import { useAtom, useSetAtom } from "jotai";
import {
    playerStatus,
    nowPlayingVisible,
    nowPlayingDragY,
} from "../../../Atoms";
import AlbumArt from "../../UI/AlbumArt";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [getPlayerStatus, setPlayerStatus] = useAtom(playerStatus);
    const [getNowPlayingVisible, setNowPlayingVisible] =
        useAtom(nowPlayingVisible);
    const navigate = useNavigate();
    const [dragStartY, setDragStartY] = useState(0);
    const setDragCurrentY = useSetAtom(nowPlayingDragY);

    const dragStart = (e) => {
        if (window.innerWidth > 550) return;
        setDragStartY(e.touches[0].clientY);
        setDragCurrentY(e.touches[0].clientY);
    };
    const dragMove = (e) => {
        if (window.innerWidth > 550) return;
        if (
            !getNowPlayingVisible &&
            dragStartY - e.changedTouches[0].clientY > 40
        )
            setNowPlayingVisible(true);
        setDragCurrentY(e.changedTouches[0].clientY);
    };
    const dragEnd = (e) => {
        if (window.innerWidth > 550) return;
        if (
            dragStartY - e.changedTouches[0].clientY <
            window.innerHeight / 3.5
        ) {
            setNowPlayingVisible(false);
        }
        setDragCurrentY(0);
        setDragStartY(0);
    };

    return (
        <>
            <div
                className="navbar"
                id="navbar"
                onTouchStart={dragStart}
                onTouchMove={dragMove}
                onTouchEnd={dragEnd}
            >
                <NavSeekBar />
                <div className="navbarButtons">
                    <div className="navbarLeft">
                        <AlbumArt />
                    </div>
                    <div className="navbarNowPlaying">
                        <div className="navbarMediaInfo">
                            <div className="navbarSongTitle">Song Title</div>
                            <div className="navbarSongInfo">Artist - Album</div>
                        </div>
                    </div>
                    <div className="navbarCenter">
                        <div className="navbarControlsTertiary">
                            <CircleButton
                                iconOnly
                                icon={mdiRepeat}
                                iconSize={1}
                            >
                                Repeat
                            </CircleButton>
                        </div>
                        <div className="navbarControlsPrimary">
                            <CircleButton
                                iconOnly
                                icon={mdiSkipPreviousOutline}
                            >
                                Previous
                            </CircleButton>
                            <CircleButton
                                iconOnly
                                icon={
                                    getPlayerStatus === 0
                                        ? mdiPause
                                        : getPlayerStatus === 1
                                        ? mdiPlay
                                        : mdiStop
                                }
                                iconSize={1.6}
                                onClick={() => {
                                    setPlayerStatus(
                                        getPlayerStatus === 0 ? 1 : 0
                                    );
                                }}
                            >
                                Play
                            </CircleButton>
                            <CircleButton iconOnly icon={mdiSkipNextOutline}>
                                Next
                            </CircleButton>
                        </div>
                        <div className="navbarControlsTertiary">
                            <CircleButton
                                iconOnly
                                icon={mdiShuffle}
                                iconSize={1}
                            >
                                Shuffle
                            </CircleButton>
                        </div>
                    </div>
                    <div className="navbarAlt">
                        <CircleButton
                            iconOnly
                            icon={mdiDotsVertical}
                            iconSize={1.1}
                            tooltip="Menu"
                            tooltipPosition="topRight"
                        >
                            Menu
                        </CircleButton>
                        <CircleButton
                            iconOnly
                            icon={mdiVolumeHigh}
                            iconSize={1.1}
                            tooltip="Volume"
                            tooltipPosition="topRight"
                        >
                            Volume
                        </CircleButton>
                    </div>
                    <div className="navbarRight navbarControlsSecondary">
                        <CircleButton
                            iconOnly
                            icon={mdiPlaylistMusicOutline}
                            tooltip="Now Playing"
                            tooltipPosition="topRight"
                            toggle={getNowPlayingVisible}
                            onClick={() => {
                                setNowPlayingVisible(!getNowPlayingVisible);
                            }}
                        >
                            Now Playing
                        </CircleButton>
                    </div>
                </div>
            </div>
            <div
                className="mobileNavbar"
                onTouchStart={dragStart}
                onTouchMove={dragMove}
                onTouchEnd={dragEnd}
            >
                <div className="navbarButtons">
                    <SquareButton
                        icon={mdiHomeOutline}
                        onClick={() => {
                            navigate("/home");
                        }}
                    >
                        Home
                    </SquareButton>
                    <SquareButton
                        icon={mdiMagnify}
                        onClick={() => {
                            navigate("/search");
                        }}
                    >
                        Search
                    </SquareButton>
                    <SquareButton
                        icon={mdiPlaylistMusicOutline}
                        onClick={() => {
                            setNowPlayingVisible(!getNowPlayingVisible);
                        }}
                    >
                        Now Playing
                    </SquareButton>
                    <SquareButton icon={mdiBookshelf}>Library</SquareButton>
                    <SquareButton icon={mdiAccountCircleOutline}>
                        Account
                    </SquareButton>
                </div>
            </div>
        </>
    );
}

export default Navbar;
