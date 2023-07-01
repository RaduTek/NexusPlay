import "./Navbar.css";
import SeekBar from "../Player/SeekBar";
import CircleButton from "../UI/CircleButton";
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
import SquareButton from "../UI/SquareButton";
import { useAtom } from "jotai";
import { playerStatus, nowPlayingVisible } from "../../Atoms";
import AlbumArt from "../UI/AlbumArt";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [getPlayerStatus, setPlayerStatus] = useAtom(playerStatus);
    const [getNowPlayingVisible, setNowPlayingVisible] =
        useAtom(nowPlayingVisible);
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar" id="navbar">
                <SeekBar />
                <div className="navbarButtons">
                    <div className="navbarLeft navbarControlsSecondary">
                        <CircleButton
                            iconOnly
                            icon={mdiBookshelf}
                            tooltip="My Library"
                        >
                            Library
                        </CircleButton>
                    </div>
                    <div className="navbarNowPlaying">
                        <AlbumArt />
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
            <div className="mobileNavbar">
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
