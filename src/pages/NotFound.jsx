import { mdiArrowLeft, mdiRobotDeadOutline } from "@mdi/js";
import Page from "../components/Layout/Page/Page";
import Icon from "@mdi/react";
import SquareButton from "../components/UI/SquareButton";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <Page>
            <div style={{ textAlign: "center", paddingTop: "32px" }}>
                <div>
                    <Icon path={mdiRobotDeadOutline} size={5} color={"#aaa"} />
                </div>
                <div
                    style={{
                        fontSize: "48pt",
                        fontWeight: "600",
                        margin: "-12px 0",
                        color: "#ddd",
                    }}
                >
                    404
                </div>
                <h1>Page not found.</h1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "12px",
                    }}
                >
                    <SquareButton
                        icon={mdiArrowLeft}
                        iconSize={1.2}
                        onClick={() => {
                            navigate(-1);
                        }}
                        padding={6}
                    >
                        Go back
                    </SquareButton>
                </div>
            </div>
        </Page>
    );
}

export default NotFound;
