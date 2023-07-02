import { mdiDotsVertical } from "@mdi/js";
import { StackItem } from "../Layout/StackView/StackView";
import AlbumArt from "../UI/AlbumArt";
import CircleButton from "../UI/CircleButton";
import "./SongItem.css";

function SongItem({ songId, title, artist, album, duration, albumArt = null }) {
    return (
        <StackItem
            focusable="true"
            className="songItem"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <AlbumArt
                className="songAlbumArt"
                image={albumArt}
                overlay="play"
            />
            <div className="songDetails">
                <span className="songTitle">{title}</span>
                <span className="songInfo">
                    <span className="songArtist">{artist}</span>
                    <span className="infoSeparator"> - </span>
                    <span className="songAlbum">{album}</span>
                </span>
            </div>
            <span className="songDuration">{duration}</span>
            <CircleButton
                className="songMenuButton"
                iconOnly
                icon={mdiDotsVertical}
                iconSize={1}
                padding={10}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                More Options
            </CircleButton>
        </StackItem>
    );
}

export default SongItem;
