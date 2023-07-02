import Icon from "@mdi/react";
import "./SquareButton.css";

function SquareButton({
    className = "",
    icon,
    iconSize = 1.4,
    onClick,
    children,
    vertical,
    toggleOn = false,
}) {
    return (
        <button
            className={
                className +
                " squareButton  " +
                (vertical ? "vertical" : "horizontal") +
                (toggleOn ? " toggleOn" : "")
            }
            onClick={onClick}
            aria-label={children}
        >
            <Icon path={icon} size={iconSize} />
            <span>{children}</span>
        </button>
    );
}

export default SquareButton;
