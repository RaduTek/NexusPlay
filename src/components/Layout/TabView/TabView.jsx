import "./TabView.css";
import { Children, useState } from "react";

function TabView({ align = "top", defaultPage = 0, children }) {
    const tabArray = Children.toArray(children);
    const [selectedPage, setSelectedPage] = useState(defaultPage);

    const getStateClassName = (index) => {
        if (selectedPage === index) return "selected";
        if (selectedPage > index) return "toLeft";
        if (selectedPage < index) return "toRight";
    };

    return (
        <div className={"tabView align" + align}>
            <div className="tabPages">
                {tabArray.map((tabPage, index) => {
                    return (
                        !tabPage.props.hidden && (
                            <div
                                className={
                                    "tabPage " +
                                    (tabPage.props.className
                                        ? tabPage.props.className
                                        : "") +
                                    " " +
                                    getStateClassName(index)
                                }
                            >
                                {tabPage.props.children}
                            </div>
                        )
                    );
                })}
            </div>
            <div className="tabButtons">
                {tabArray.map((tabPage, index) => {
                    return (
                        !tabPage.props.hidden && (
                            <button
                                className={
                                    selectedPage === index ? "selected" : ""
                                }
                                key={index}
                                onClick={() => {
                                    setSelectedPage(index);
                                }}
                            >
                                {tabPage.props.title}
                            </button>
                        )
                    );
                })}
            </div>
        </div>
    );
}

function TabPage({ className, title, children, hidden }) {}

export { TabView, TabPage };
