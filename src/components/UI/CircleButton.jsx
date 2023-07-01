import Icon from "@mdi/react";
import "./CircleButton.css";
import Tooltip from "../UI/Tooltip";

function CircleButton({
    className = "",
    iconOnly = false,
    icon,
    iconSize = 1.4,
    padding = 6,
    tooltip = "",
    tooltipPosition = "topLeft",
    onClick,
    children,
}) {
    return (
        <button
            className={
                "circleButton " +
                className +
                (iconOnly ? " icon tooltipHost" : "")
            }
            onClick={onClick}
            aria-label={tooltip ? tooltip : children}
            style={{ padding: padding + "px" }}
        >
            {icon && <Icon path={icon} size={iconSize} />}
            {!iconOnly && <span>{children}</span>}
            {tooltip.length > 0 && (
                <Tooltip position={tooltipPosition}>{tooltip}</Tooltip>
            )}
        </button>
    );
}

export default CircleButton;
