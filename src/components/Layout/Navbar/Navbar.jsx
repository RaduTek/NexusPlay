import "./Navbar.css";
import NavSeekBar from "../../Player/NavSeekBar";
import CircleButton from "../../UI/CircleButton";
import {
    mdiDotsVertical,
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
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
    playerStatus,
    mobilePlayingDragY,
    viewType,
    fullPlayingVisible,
    mobilePlayingVisible,
} from "../../../Atoms";
import AlbumArt from "../../UI/AlbumArt";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef, useState } from "react";

function Navbar() {
    const navbar = useRef(null);
    const [getPlayerStatus, setPlayerStatus] = useAtom(playerStatus);
    const [getFullPlayingVisible, setFullPlayingVisible] =
        useAtom(fullPlayingVisible);
    const [getMobilePlayingVisible, setMobilePlayingVisible] =
        useAtom(mobilePlayingVisible);
    const getViewType = useAtomValue(viewType);
    const [dragStartY, setDragStartY] = useState(0);
    const setDragCurrentY = useSetAtom(mobilePlayingDragY);
    const windowSize = useWindowSize();

    const dragStart = (e) => {
        if (getViewType !== "mobile") return;
        const computedStyle = getComputedStyle(navbar.current);
        const navbarTotalHeight =
            Number(
                computedStyle
                    .getPropertyValue("--navbar-height")
                    .replace("px", "")
            ) +
            Number(
                computedStyle
                    .getPropertyValue("--navbar-mobile-height")
                    .replace("px", "")
            );
        const startPoint = windowSize.height - navbarTotalHeight;
        setDragStartY(startPoint);
        setDragCurrentY(startPoint);
    };
    const dragMove = (e) => {
        if (getViewType !== "mobile") return;
        if (
            !getMobilePlayingVisible &&
            e.changedTouches[0].clientY < dragStartY
        )
            setMobilePlayingVisible(true);
        setDragCurrentY(Math.min(e.changedTouches[0].clientY, dragStartY));
    };
    const dragEnd = (e) => {
        if (getViewType !== "mobile") return;
        if (
            dragStartY - e.changedTouches[0].clientY <
            window.innerHeight / 3.5
        ) {
            setMobilePlayingVisible(false);
        }
        setDragCurrentY(0);
        setDragStartY(0);
    };

    return (
        <div
            ref={navbar}
            className="navbar"
            id="navbar"
            onTouchStart={dragStart}
            onTouchMove={dragMove}
            onTouchEnd={dragEnd}
        >
            {!getMobilePlayingVisible && <NavSeekBar />}
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
                        <CircleButton iconOnly icon={mdiRepeat} iconSize={1}>
                            Repeat
                        </CircleButton>
                    </div>
                    <div className="navbarControlsPrimary">
                        <CircleButton iconOnly icon={mdiSkipPreviousOutline}>
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
                                setPlayerStatus(getPlayerStatus === 0 ? 1 : 0);
                            }}
                        >
                            Play
                        </CircleButton>
                        <CircleButton iconOnly icon={mdiSkipNextOutline}>
                            Next
                        </CircleButton>
                    </div>
                    <div className="navbarControlsTertiary">
                        <CircleButton iconOnly icon={mdiShuffle} iconSize={1}>
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
                        toggle={getFullPlayingVisible}
                        onClick={() => {
                            setFullPlayingVisible(!getFullPlayingVisible);
                        }}
                    >
                        Now Playing
                    </CircleButton>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
