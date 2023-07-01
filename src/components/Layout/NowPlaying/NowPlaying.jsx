import "./NowPlaying.css";
import {
    mdiChevronDown,
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
import { playerStatus, nowPlayingVisible } from "../../../Atoms";

function NowPlaying() {
    const [getPlayerStatus, setPlayerStatus] = useAtom(playerStatus);
    const [isVisible, setVisible] = useAtom(nowPlayingVisible);

    return (
        <div className={"nowPlaying " + (isVisible ? "" : "hidden")}>
            <div className="topButtons">
                <CircleButton
                    icon={mdiChevronDown}
                    iconOnly
                    padding={4}
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    Hide
                </CircleButton>
            </div>
            <TabView align="bottom">
                <TabPage title="Now Playing" className="nowPlayingPage">
                    <div className="albumArtList">
                        <div className="albumArtFrame">
                            <div className="albumArtInner">
                                <img alt="Album Art" />
                            </div>
                        </div>
                    </div>
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
                            <span class="songTitle">Song Title</span>
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
                    <div className="playbackControls">
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
                                setPlayerStatus(getPlayerStatus === 0 ? 1 : 0);
                            }}
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
                </TabPage>
                <TabPage title="Playlist">Playlist</TabPage>
                <TabPage title="Lyrics">Lyrics</TabPage>
            </TabView>
        </div>
    );
}

export default NowPlaying;
