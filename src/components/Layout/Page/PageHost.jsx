import "./PageHost.css";
import { useAtomValue } from "jotai";
import { nowPlayingVisible } from "../../../Atoms";

function PageHost({ children }) {
    const isNowPlayingVisible = useAtomValue(nowPlayingVisible);

    return (
        <div
            className={
                "pageHost " + (isNowPlayingVisible ? "nowPlayingVisible " : "")
            }
        >
            {children}
        </div>
    );
}

export default PageHost;
