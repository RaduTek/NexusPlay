import { mdiDotsVertical } from "@mdi/js";
import { StackItem } from "../Layout/StackView/StackView";
import AlbumArt from "../UI/AlbumArt";
import CircleButton from "../UI/CircleButton";
import "./SongItem.css";

function SongItem({ songId, title, artist, album, duration, albumArt = null }) {
    return (
        <StackItem
            className="songItem"
            onClick={(e) => {
                e.stopPropagation();
                console.log("SongItem clicked!");
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
            <span>{duration}</span>
            <CircleButton
                className="songMenuButton"
                iconOnly
                icon={mdiDotsVertical}
                iconSize={1}
                padding={10}
                onClick={(e) => {
                    e.stopPropagation();
                    console.log("SongItem More options clicked!");
                }}
            >
                More Options
            </CircleButton>
        </StackItem>
    );
}

export default SongItem;
