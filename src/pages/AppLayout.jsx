import { Outlet } from "react-router-dom";
import PageHost from "../components/Layout/Page/PageHost";
import Navbar from "../components/Layout/Navbar/Navbar";
import AudioPlayer from "../components/Player/AudioPlayer";
import NowPlaying from "../components/Layout/NowPlaying/NowPlaying";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { mobileView } from "../Atoms";

function AppLayout() {
    const windowSize = useWindowSize();
    const [getMobileView, setMobileView] = useAtom(mobileView);

    useEffect(() => {
        setMobileView(windowSize.width <= 550);
    }, [windowSize, setMobileView]);

    return (
        <div id="app" className={getMobileView ? "mobile" : ""}>
            <AudioPlayer />
            <Sidebar />
            <NowPlaying />
            <Navbar />
            <PageHost>
                <Outlet />
            </PageHost>
        </div>
    );
}

export default AppLayout;
