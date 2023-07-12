import Icon from "@mdi/react";
import "./PageTitle.css";
import CircleButton from "../../UI/CircleButton";
import { mdiArrowLeft } from "@mdi/js";
import { useLocation, useNavigate } from "react-router-dom";

function PageTitle({ icon, children }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="pageTitle">
            {location.pathname !== "/home" && (
                <CircleButton
                    iconOnly
                    icon={mdiArrowLeft}
                    iconSize={1.35}
                    padding={6}
                    className="backButton"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Go back
                </CircleButton>
            )}
            {icon && <Icon path={icon} size={1.4} />}
            <span>{children}</span>
        </div>
    );
}

export default PageTitle;
