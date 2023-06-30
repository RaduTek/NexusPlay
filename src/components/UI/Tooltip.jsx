import "./Tooltip.css";

function Tooltip({ position = "top", delay = 3000, children }) {
    return (
        <div
            className={"tooltip " + position}
            style={{ "--delayIn": delay + "ms" }}
        >
            {children}
        </div>
    );
}

export default Tooltip;
