import { mdiPlaylistPlay } from "@mdi/js";
import Page from "../components/Layout/Page/Page";
import PageTitle from "../components/Layout/Page/PageTitle";

function Playlists() {
    return (
        <Page>
            <PageTitle icon={mdiPlaylistPlay}>Playlists</PageTitle>
        </Page>
    );
}

export default Playlists;
