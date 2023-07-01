import "./Sidebar.css";
import SquareButton from "../../UI/SquareButton";
import {
    mdiAccountCircleOutline,
    mdiBookshelf,
    mdiHomeOutline,
    mdiMagnify,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="sideBar">
            <SquareButton
                vertical
                icon={mdiHomeOutline}
                onClick={() => {
                    navigate("/home");
                }}
            >
                Home
            </SquareButton>
            <SquareButton
                vertical
                icon={mdiMagnify}
                onClick={() => {
                    navigate("/search");
                }}
            >
                Search
            </SquareButton>
            <SquareButton vertical icon={mdiBookshelf}>
                Library
            </SquareButton>
            <SquareButton vertical icon={mdiAccountCircleOutline}>
                Account
            </SquareButton>
        </div>
    );
}

export default Sidebar;
