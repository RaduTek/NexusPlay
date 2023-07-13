import "./MobileNowPlaying.css";
import {
    mdiChevronDown,
    mdiDotsVertical,
    mdiHeartOutline,
    mdiPause,
    mdiPlay,
    mdiPlaylistPlus,
    mdiRepeat,
    mdiShuffle,
    mdiSkipNextOutline,
    mdiSkipPreviousOutline,
    mdiStop,
} from "@mdi/js";
import CircleButton from "../../UI/CircleButton";
import { TabPage, TabView } from "../TabView/TabView";
import { useAtom } from "jotai";
import {
    playerStatus,
    mobilePlayingVisible,
    mobilePlayingDragY,
} from "../../../Atoms";
import SeekBar from "../../Player/SeekBar";
import { useState } from "react";
import sampleAlbumArt from "../../../images//Album Art.jpg";

function MobileNowPlaying() {
    const [getPlayerStatus, setPlayerStatus] = useAtom(playerStatus);
    const [isVisible, setVisible] = useAtom(mobilePlayingVisible);
    const [dragStartY, setDragStartY] = useState(0);
    const [dragCurrentY, setDragCurrentY] = useAtom(mobilePlayingDragY);

    const dragStart = (e) => {
        if (window.innerWidth > 550) return;
        setDragStartY(e.touches[0].clientY);
        setDragCurrentY(0);
    };
    const dragMove = (e) => {
        if (window.innerWidth > 550) return;
        setDragCurrentY(e.changedTouches[0].clientY - dragStartY);
    };
    const dragEnd = (e) => {
        if (window.innerWidth > 550) return;
        if (
            e.changedTouches[0].clientY - dragStartY >
            window.innerHeight / 3.5
        ) {
            setVisible(false);
        }
        setDragCurrentY(0);
        setDragStartY(0);
    };

    return (
        <div
            className={"nowPlaying " + (isVisible ? "" : "hidden")}
            style={
                dragCurrentY > 0
                    ? {
                          transform: "translateY(" + dragCurrentY + "px)",
                          transition: "none",
                      }
                    : {}
            }
        >
            <div
                className="topButtons"
                onTouchStart={dragStart}
                onTouchMove={dragMove}
                onTouchEnd={dragEnd}
            >
                <div className="buttonsLeft">
                    <CircleButton
                        className="nowPlayingHideBtn"
                        icon={mdiChevronDown}
                        iconSize={1.2}
                        iconOnly
                        padding={4}
                        onClick={() => {
                            setVisible(false);
                        }}
                    >
                        Hide
                    </CircleButton>
                </div>
                <div className="buttonsRight">
                    <CircleButton
                        icon={mdiDotsVertical}
                        iconSize={1.2}
                        iconOnly
                        padding={4}
                    >
                        More Options
                    </CircleButton>
                </div>
            </div>
            <TabView align="bottom" defaultPage={1}>
                <TabPage title="Lyrics">Lyrics</TabPage>
                <TabPage title="Now Playing" className="nowPlayingPage">
                    <div
                        className="nowPlayingPage"
                        onTouchStart={dragStart}
                        onTouchMove={dragMove}
                        onTouchEnd={dragEnd}
                    >
                        <div className="albumArtList">
                            <div className="albumArtFrame">
                                <div className="albumArtInner">
                                    <img alt="Album Art" src={sampleAlbumArt} />
                                </div>
                            </div>
                        </div>
                        <div className="playbackControls">
                            <div className="songDetails">
                                <div>
                                    <CircleButton
                                        icon={mdiPlaylistPlus}
                                        iconOnly
                                        iconSize={1.3}
                                    >
                                        Add to playlist
                                    </CircleButton>
                                </div>
                                <div className="songDetailsText">
                                    <span className="songTitle">
                                        Song Title
                                    </span>
                                    <span>Song Artist</span>
                                    <span>Song Album</span>
                                </div>
                                <div>
                                    <CircleButton
                                        icon={mdiHeartOutline}
                                        iconOnly
                                        iconSize={1.3}
                                    >
                                        Add to favourites
                                    </CircleButton>
                                </div>
                            </div>
                            <div className="seekBarWrap">
                                <SeekBar />
                            </div>
                            <div className="playbackButtons">
                                <CircleButton
                                    iconOnly
                                    icon={mdiRepeat}
                                    iconSize={1.1}
                                    padding={12}
                                >
                                    Repeat
                                </CircleButton>
                                <CircleButton
                                    iconOnly
                                    icon={mdiSkipPreviousOutline}
                                    iconSize={1.5}
                                    padding={8}
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
                                    iconSize={2.2}
                                    padding={14}
                                    onClick={() => {
                                        setPlayerStatus(
                                            getPlayerStatus === 0 ? 1 : 0
                                        );
                                    }}
                                    shaded
                                >
                                    Play
                                </CircleButton>
                                <CircleButton
                                    iconOnly
                                    icon={mdiSkipNextOutline}
                                    iconSize={1.5}
                                    padding={8}
                                >
                                    Next
                                </CircleButton>
                                <CircleButton
                                    iconOnly
                                    icon={mdiShuffle}
                                    iconSize={1.1}
                                    padding={12}
                                >
                                    Shuffle
                                </CircleButton>
                            </div>
                        </div>
                    </div>
                </TabPage>
                <TabPage title="Playlist">Playlist</TabPage>
            </TabView>
        </div>
    );
}

export default MobileNowPlaying;
