import Page from "../components/Layout/Page/Page";
import {
    StackView,
    StackGroup,
} from "../components/Layout/StackView/StackView";
import SongItem from "../components/Views/SongItem";
import pic from "../images/Album Art.jpg";

function Home() {
    return (
        <Page>
            <StackView>
                <StackGroup>
                    <SongItem
                        title="Song 1"
                        artist="Artist 1"
                        album="Album 1"
                        duration="4:20"
                    />
                    <SongItem
                        title="Song 2"
                        artist="Artist 2"
                        album="Album 2"
                        duration="4:20"
                    />
                    <SongItem
                        title="Song 3"
                        artist="Artist 3"
                        album="Album 3"
                        duration="4:20"
                    />
                    <SongItem
                        title="Song 4"
                        artist="Artist 4"
                        album="Album 4"
                        albumArt={pic}
                        duration="4:20"
                    />
                </StackGroup>
            </StackView>
        </Page>
    );
}

export default Home;
