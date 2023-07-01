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
                icon={mdiHomeOutline}
                onClick={() => {
                    navigate("/home");
                }}
            >
                Home
            </SquareButton>
            <SquareButton
                icon={mdiMagnify}
                onClick={() => {
                    navigate("/search");
                }}
            >
                Search
            </SquareButton>
            <SquareButton icon={mdiBookshelf}>Library</SquareButton>
            <SquareButton icon={mdiAccountCircleOutline}>Account</SquareButton>
        </div>
    );
}

export default Sidebar;
