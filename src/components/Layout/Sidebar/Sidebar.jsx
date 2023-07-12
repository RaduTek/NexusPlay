import "./Sidebar.css";
import SquareButton from "../../UI/SquareButton";
import {
    mdiAccountCircleOutline,
    mdiAccountMultipleOutline,
    mdiBookshelf,
    mdiHomeOutline,
    mdiMagnify,
    mdiPlaylistPlay,
} from "@mdi/js";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    const getLocation = useLocation();

    const sidebarRoutes = [
        { path: "/home", name: "Home", icon: mdiHomeOutline },
        { path: "/search", name: "Search", icon: mdiMagnify },
        { path: "/library", name: "Library", icon: mdiBookshelf },
        {
            path: "/library/playlists",
            name: "Playlists",
            icon: mdiPlaylistPlay,
        },
        {
            path: "/library/artists",
            name: "Artists",
            icon: mdiAccountMultipleOutline,
        },
        { path: "/account", name: "Account", icon: mdiAccountCircleOutline },
    ];

    return (
        <div className="sideBar">
            {sidebarRoutes.map((route, index) => {
                return (
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
    );
}

export default Sidebar;
