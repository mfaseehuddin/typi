import React from "react";
import { Context } from "../Context/Context";
type Props = {};

export default function Timer({}: Props) {
    const {
        globalTimer,
        createTimer,
        makeGlobalTimer,
        typiTestState,
        typiTypingState,
    } = React.useContext(Context);

    React.useEffect(() => {
        makeGlobalTimer(createTimer(1000, false));
    }, []);

    return (
        <div>
            {globalTimer ? (
                <div
                    style={{
                        backgroundColor: "var(--mirage-orange)",
                        color: "var(--text-color)",
                        //center the items
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        borderRadius: "20px",
                        //width fit
                        width: "fit-content",
                        margin: "50px auto",
                    }}
                >
                    <p
                        style={{
                            fontSize: "1.5rem",
                            margin: 0,
                            padding: "5px",
                        }}
                    >
                        Timer
                    </p>
                    <p
                        style={{
                            fontSize: "1.5rem",
                            margin: 0,
                            padding: "5px",
                        }}
                    >
                        Test Time: {typiTestState.testTime}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <button
                            className="buttonSimple"
                            onClick={() => globalTimer.start()}
                            disabled={typiTypingState.testStarted}
                        >
                            Start
                        </button>
                        <button
                            className="buttonSimple"
                            onClick={() => globalTimer.stop()}
                            disabled={
                                !typiTypingState.testStarted ||
                                typiTypingState.testFinished
                            }
                        >
                            Stop
                        </button>
                        <button
                            className="buttonSimple"
                            onClick={() => globalTimer.reset()}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            ) : (
                <h1>Timer is null</h1>
            )}
        </div>
    );
}
