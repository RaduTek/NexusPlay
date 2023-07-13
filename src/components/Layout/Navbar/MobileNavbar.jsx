import {
    mdiAccountCircleOutline,
    mdiBookshelf,
    mdiHomeOutline,
    mdiMagnify,
    mdiPlaylistMusicOutline,
} from "@mdi/js";
import "./MobileNavbar.css";
import SquareButton from "../../UI/SquareButton";
import { useLocation, useNavigate } from "react-router-dom";
import { mobilePlayingDragY, mobilePlayingVisible } from "../../../Atoms";
import { useAtom, useAtomValue } from "jotai";
import { useWindowSize } from "@uidotdev/usehooks";

function MobileNavbar() {
    const navigate = useNavigate();
    const getLocation = useLocation();
    const [getNowPlayingVisible, setNowPlayingVisible] =
        useAtom(mobilePlayingVisible);
    const getDragCurrentY = useAtomValue(mobilePlayingDragY);
    const windowSize = useWindowSize();

    const navbarRoutes = [
        { path: "/home", name: "Home", icon: mdiHomeOutline },
        { path: "/search", name: "Search", icon: mdiMagnify },
        {
            path: "!nowplaying",
        },
        { path: "/library", name: "Library", icon: mdiBookshelf },
        { path: "/account", name: "Account", icon: mdiAccountCircleOutline },
    ];

    return (
        <div
            className="mobileNavbar"
            style={
                getNowPlayingVisible && getDragCurrentY > 0
                    ? {
                          transition: "none",
                          transform:
                              "translateY(" +
                              Math.max(
                                  (1 -
                                      getDragCurrentY /
                                          (windowSize.height - 100)) *
                                      100,
                                  0
                              ) +
                              "%)",
                      }
                    : {}
            }
        >
            <div className="navbarButtons">
                {navbarRoutes.map((route, index) => {
                    return route.path === "!nowplaying" ? (
                        <SquareButton
                            className="openNowPlaying"
                            vertical
                            icon={mdiPlaylistMusicOutline}
                            onClick={() => {
                                setNowPlayingVisible(!getNowPlayingVisible);
                            }}
                        >
                            Now Playing
                        </SquareButton>
                    ) : (
                        <SquareButton
                            vertical
                            icon={route.icon}
                            onClick={() => {
                                navigate(route.path);
                            }}
                            toggleOn={getLocation.pathname === route.path}
                            key={index}
                        >
                            {route.name}
                        </SquareButton>
                    );
                })}
            </div>
        </div>
    );
}

export default MobileNavbar;
