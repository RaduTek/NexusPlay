import "./Navbar.css";
import noAlbumCover from "../../images/noAlbumCover.svg";
import SeekBar from "../Player/SeekBar";
import NavbarButton from "./NavbarButton";
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
import MobileNavbarButton from "./MobileNavbarButton";
import { useAtom } from "jotai";
import { playerStatus } from "../../Atoms";

function Navbar() {
    const [getPlayerStatus, setPlayerStatus] = useAtom(playerStatus);

    return (
        <>
            <div className="navbar" id="navbar">
                <SeekBar />
                <div className="navbarButtons">
                    <div className="navbarLeft navbarControlsSecondary">
                        <NavbarButton icon={mdiBookshelf} tooltip="My Library">
                            Library
                        </NavbarButton>
                    </div>
                    <div className="navbarNowPlaying">
                        <img
                            className="navbarAlbumArt"
                            src={noAlbumCover}
                            alt="Album Art"
                        />
                        <div className="navbarMediaInfo">
                            <div className="navbarSongTitle">Song Title</div>
                            <div className="navbarSongInfo">Artist - Album</div>
                        </div>
                    </div>
                    <div className="navbarCenter">
                        <div className="navbarControlsTertiary">
                            <NavbarButton icon={mdiRepeat} iconSize={1}>
                                Repeat
                            </NavbarButton>
                        </div>
                        <div className="navbarControlsPrimary">
                            <NavbarButton icon={mdiSkipPreviousOutline}>
                                Previous
                            </NavbarButton>
                            <NavbarButton
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
                            </NavbarButton>
                            <NavbarButton icon={mdiSkipNextOutline}>
                                Next
                            </NavbarButton>
                        </div>
                        <div className="navbarControlsTertiary">
                            <NavbarButton icon={mdiShuffle} iconSize={1}>
                                Shuffle
                            </NavbarButton>
                        </div>
                    </div>
                    <div className="navbarAlt">
                        <NavbarButton
                            icon={mdiDotsVertical}
                            iconSize={1.1}
                            tooltip="Menu"
                            tooltipPosition="topRight"
                        >
                            Menu
                        </NavbarButton>
                        <NavbarButton
                            icon={mdiVolumeHigh}
                            iconSize={1.1}
                            tooltip="Volume"
                            tooltipPosition="topRight"
                        >
                            Volume
                        </NavbarButton>
                    </div>
                    <div className="navbarRight navbarControlsSecondary">
                        <NavbarButton
                            icon={mdiPlaylistMusicOutline}
                            tooltip="Now Playing"
                            tooltipPosition="topRight"
                        >
                            Now Playing
                        </NavbarButton>
                    </div>
                </div>
            </div>
            <div className="mobileNavbar">
                <div className="navbarButtons">
                    <MobileNavbarButton icon={mdiHomeOutline}>
                        Home
                    </MobileNavbarButton>
                    <MobileNavbarButton icon={mdiMagnify}>
                        Search
                    </MobileNavbarButton>
                    <MobileNavbarButton icon={mdiPlaylistMusicOutline}>
                        Now Playing
                    </MobileNavbarButton>
                    <MobileNavbarButton icon={mdiBookshelf}>
                        Library
                    </MobileNavbarButton>
                    <MobileNavbarButton icon={mdiAccountCircleOutline}>
                        Account
                    </MobileNavbarButton>
                </div>
            </div>
        </>
    );
}

export default Navbar;
