import Icon from "@mdi/react";
import "./SquareButton.css";

function SquareButton({ icon, iconSize = 1.4, onClick, children }) {
    return (
        <button
            className="squareButton"
            onClick={onClick}
            aria-label={children}
        >
            <Icon path={icon} size={iconSize} />
            <span>{children}</span>
        </button>
    );
}

export default SquareButton;
