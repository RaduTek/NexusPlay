import Icon from "@mdi/react";
import noAlbumCover from "../../images/noAlbumCover.svg";
import "./AlbumArt.css";
import { mdiEqualizer, mdiPlay } from "@mdi/js";

function AlbumArt({
    className = "",
    alt = null,
    image = null,
    size = "48",
    overlay = null,
}) {
    return (
        <div
            className={
                "albumArtWrap " +
                className +
                (overlay ? " hasOverlay" : "") +
                (overlay === "playing" ? " permanentOverlay" : "")
            }
            style={{ "--albumArtSize": size + "px" }}
        >
            {overlay && (
                <span className="albumIconWrap">
                    <Icon
                        path={overlay === "playing" ? mdiEqualizer : mdiPlay}
                        size={1.1}
                    />
                </span>
            )}
            <img
                className="albumArtImg"
                src={image ? image : noAlbumCover}
                alt={alt ? alt : "No Album Art"}
            />
        </div>
    );
}

export default AlbumArt;
