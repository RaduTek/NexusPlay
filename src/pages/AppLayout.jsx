import { Outlet } from "react-router-dom";
import PageHost from "../components/Layout/Page/PageHost";
import Navbar from "../components/Navbar/Navbar";
import AudioPlayer from "../components/Player/AudioPlayer";
import NowPlaying from "../components/Layout/NowPlaying/NowPlaying";

function AppLayout() {
    return (
        <>
            <AudioPlayer />
            <Navbar />
            <NowPlaying />
            <PageHost>
                <Outlet />
            </PageHost>
        </>
    );
}

export default AppLayout;
