import Icon from "@mdi/react";
import "./MobileNavbarButton.css";

function MobileNavbarButton({ icon, iconSize = 1.4, onClick, children }) {
    return (
        <button
            className="mobileNavbarButton"
            onClick={onClick}
            aria-label={children}
        >
            <Icon path={icon} size={iconSize} />
            <span>{children}</span>
        </button>
    );
}

export default MobileNavbarButton;
