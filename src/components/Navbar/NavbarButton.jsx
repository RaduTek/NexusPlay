import Icon from "@mdi/react";
import "./NavbarButton.css";
import Tooltip from "../UI/Tooltip";

function NavbarButton({
    icon,
    iconSize = 1.4,
    tooltip = "",
    tooltipPosition = "topLeft",
    onClick,
    children,
}) {
    return (
        <button
            className={"navbarButton" + (icon ? " icon tooltipHost" : "")}
            onClick={onClick}
            aria-label={children}
        >
            {icon ? (
                <Icon path={icon} size={iconSize} />
            ) : (
                <span>{children}</span>
            )}
            {tooltip.length > 0 && (
                <Tooltip position={tooltipPosition}>{children}</Tooltip>
            )}
        </button>
    );
}

export default NavbarButton;
