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
import sampleAlbumArt2 from "../../../images//Album Art 2.jpg";
import sampleAlbumArt3 from "../../../images//Album Art 3.jpg";
import { useWindowSize } from "@uidotdev/usehooks";

function MobileNowPlaying() {
    const windowSize = useWindowSize();
    const [getPlayerStatus, setPlayerStatus] = useAtom(playerStatus);
    const [isVisible, setVisible] = useAtom(mobilePlayingVisible);
    const [paneDragY, setPaneDragY] = useAtom(mobilePlayingDragY);

    const [dragStartPt, setDragStartPt] = useState({ x: 0, y: 0 });
    const [artSwipeCurrentX, setArtSwipeCurrentX] = useState(0);

    const paneDragStart = (e) => {
        setDragStartPt({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };
    const paneDragMove = (e) => {
        const dragCurrentPt = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
        };
        setPaneDragY(dragCurrentPt.y - dragStartPt.y);
    };
    const paneDragEnd = (e) => {
        const dragCurrentPt = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
        };
        if (dragCurrentPt.y - dragStartPt.y > window.innerHeight / 3) {
            setVisible(false);
        }
        setPaneDragY(0);
        setDragStartPt({ x: 0, y: 0 });
    };

    const artDragStart = (e) => {
        e.stopPropagation();
        setDragStartPt({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };
    const artDragMove = (e) => {
        e.stopPropagation();
        const dragCurrentPt = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
        };
        if (
            Math.abs(dragStartPt.x - dragCurrentPt.x) >
            Math.abs(dragStartPt.y - dragCurrentPt.y)
        ) {
            setPaneDragY(0);
            const swipeDelta = dragCurrentPt.x - dragStartPt.x;
            // console.log(swipeDelta);
            if (Math.abs(swipeDelta) <= windowSize.width)
                setArtSwipeCurrentX(swipeDelta);
        } else if (artSwipeCurrentX === 0) {
            setPaneDragY(dragCurrentPt.y - dragStartPt.y);
        }
    };
    const artDragEnd = (e) => {
        if (artSwipeCurrentX !== 0) {
            e.stopPropagation();
            setArtSwipeCurrentX(0);
            setDragStartPt({ x: 0, y: 0 });
        }
    };

    return (
        <div
            className={"nowPlaying " + (isVisible ? "" : "hidden")}
            style={
                paneDragY > 0
                    ? {
                          transform: "translateY(" + paneDragY + "px)",
                          transition: "none",
                      }
                    : {}
            }
        >
            <div
                className="topButtons"
                onTouchStart={paneDragStart}
                onTouchMove={paneDragMove}
                onTouchEnd={paneDragEnd}
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
                <div className="topLabel">Now Playing</div>
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
                        onTouchStart={paneDragStart}
                        onTouchMove={paneDragMove}
                        onTouchEnd={paneDragEnd}
                    >
                        <div
                            className="albumArtList"
                            onTouchStart={artDragStart}
                            onTouchMove={artDragMove}
                            onTouchEnd={artDragEnd}
                            style={
                                artSwipeCurrentX !== 0
                                    ? {
                                          transform:
                                              "translateX(" +
                                              artSwipeCurrentX +
                                              "px)",
                                      }
                                    : {}
                            }
                        >
                            <div className="albumArtFrame">
                                <div className="albumArtInner">
                                    <img
                                        alt="Album Art"
                                        src={sampleAlbumArt2}
                                    />
                                </div>
                            </div>
                            <div className="albumArtFrame">
                                <div className="albumArtInner">
                                    <img alt="Album Art" src={sampleAlbumArt} />
                                </div>
                            </div>
                            <div className="albumArtFrame">
                                <div className="albumArtInner">
                                    <img
                                        alt="Album Art"
                                        src={sampleAlbumArt3}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="playbackControls">
                            <div className="songDetails">
                                <div>
                                    <CircleButton
                                        icon={mdiPlaylistPlus}
                                        iconOnly
                                        iconSize={1.2}
                                    >
                                        Add to playlist
                                    </CircleButton>
                                </div>
                                <div className="songDetailsText">
                                    <span className="songTitle">
                                        Song Title
                                    </span>
                                    <span>Song Artist</span>
                                </div>
                                <div>
                                    <CircleButton
                                        icon={mdiHeartOutline}
                                        iconOnly
                                        iconSize={1.2}
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
                                    iconSize={1.8}
                                    padding={16}
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
