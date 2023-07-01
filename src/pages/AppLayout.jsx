import { Outlet } from "react-router-dom";
import PageHost from "../components/Layout/Page/PageHost";
import Navbar from "../components/Layout/Navbar/Navbar";
import AudioPlayer from "../components/Player/AudioPlayer";
import NowPlaying from "../components/Layout/NowPlaying/NowPlaying";
import Sidebar from "../components/Layout/Sidebar/Sidebar";

function AppLayout() {
    return (
        <>
            <AudioPlayer />
            <Sidebar />
            <NowPlaying />
            <Navbar />
            <PageHost>
                <Outlet />
            </PageHost>
        </>
    );
}

export default AppLayout;
