import "./StackView.css";

function StackView({ children }) {
    return <div className="stackView">{children}</div>;
}

function StackGroup({ children }) {
    return <div className="stackGroup">{children}</div>;
}

function StackItem({ className = "", focusable = true, onClick, children }) {
    return (
        <div
            className={
                className + " stackItem " + (focusable ? "focusable" : "")
            }
            tabIndex={focusable ? 0 : -1}
            role={focusable ? "button" : ""}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export { StackView, StackGroup, StackItem };
