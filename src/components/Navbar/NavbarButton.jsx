import Icon from "@mdi/react";
import "./NavbarButton.css";

function NavbarButton({ icon, children }) {
    return (
        <button className={"navbarButton" + (icon ? " icon" : "")}>
            {icon ? <Icon path={icon} size={1.5} /> : <span>{children}</span>}
        </button>
    );
}

export default NavbarButton;
