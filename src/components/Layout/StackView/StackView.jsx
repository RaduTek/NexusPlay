import "./StackView.css";

function StackView({ children }) {
    return <div className="stackView">{children}</div>;
}

function StackGroup({ children }) {
    return <div className="stackGroup">{children}</div>;
}

function StackItem({ className = "", focusable = true, onClick, children }) {
    return focusable ? (
        <button
            className={"stackItem focusable " + className}
            onClick={onClick}
        >
            {children}
        </button>
    ) : (
        <div className={"stackItem " + className}>{children}</div>
    );
}

export { StackView, StackGroup, StackItem };
