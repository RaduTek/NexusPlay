import { Outlet } from "react-router-dom";
import PageHost from "../components/Layout/Page/PageHost";
import Navbar from "../components/Layout/Navbar/Navbar";
import AudioPlayer from "../components/Player/AudioPlayer";
import MobileNowPlaying from "../components/Layout/NowPlaying/MobileNowPlaying";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import { viewType, mobilePlayingVisible } from "../Atoms";
import MobileNavbar from "../components/Layout/Navbar/MobileNavbar";

function AppLayout() {
    const windowSize = useWindowSize();
    const [getViewType, setViewType] = useAtom(viewType);
    const isNowPlayingVisible = useAtomValue(mobilePlayingVisible);

    useEffect(() => {
        setViewType(windowSize.width <= 550 ? "mobile" : "full");
    }, [windowSize, setViewType]);

    return (
        <div
            id="app"
            className={
                getViewType +
                " " +
                (isNowPlayingVisible ? "nowPlayingOpen" : "") +
                " all"
            }
        >
            <AudioPlayer />
            {getViewType !== "mobile" && <Sidebar />}
            <Navbar />
            {getViewType === "mobile" && (
                <>
                    <MobileNowPlaying />
                    <MobileNavbar />
                </>
            )}
            <PageHost>
                <Outlet />
            </PageHost>
        </div>
    );
}

export default AppLayout;
