import Page from "../components/Layout/Page/Page";
import { StackView, StackItem } from "../components/Layout/StackView/StackView";
import {
    mdiAccountMultipleOutline,
    mdiBookshelf,
    mdiChevronRight,
    mdiMusicBoxOutline,
    mdiMusicNoteOutline,
    mdiPlaylistPlay,
} from "@mdi/js";
import PageTitle from "../components/Layout/Page/PageTitle";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";

function Library() {
    const navigate = useNavigate();

    const libraryRoutes = [
        { path: "playlists", name: "Playlists", icon: mdiPlaylistPlay },
        { path: "artists", name: "Artists", icon: mdiAccountMultipleOutline },
        { path: "albums", name: "Albums", icon: mdiMusicBoxOutline },
        { path: "songs", name: "Songs", icon: mdiMusicNoteOutline },
    ];

    return (
        <Page>
            <PageTitle icon={mdiBookshelf}>Library</PageTitle>
            <section>
                <StackView>
                    {libraryRoutes.map((route, index) => {
                        return (
                            <StackItem
                                onClick={() => {
                                    navigate(route.path);
                                }}
                                key={index}
                            >
                                <Icon
                                    path={route.icon}
                                    size={1.4}
                                    style={{ padding: "4px" }}
                                />
                                <span style={{ fontSize: "12pt" }}>
                                    {route.name}
                                </span>
                                <Icon path={mdiChevronRight} size={1.4} />
                            </StackItem>
                        );
                    })}
                </StackView>
            </section>
        </Page>
    );
}

export default Library;
