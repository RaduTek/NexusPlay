import Icon from "@mdi/react";
import "./PageTitle.css";

function PageTitle({ icon, children }) {
    return (
        <div className="pageTitle">
            {icon && <Icon path={icon} size={1.4} />}
            <span>{children}</span>
        </div>
    );
}

export default PageTitle;
