import React from "react";

import { Context } from "../Context/Context";
import Timer from "../Timer/Timer";

type TypiTestType = {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    letterSpacing: string;
    activeColor: string;
    inactiveColor: string;
};

type Props = {
    TestStyle: TypiTestType;
};

export default function TypiTest({ TestStyle }: Props) {
    const { typiTypingState, updateTypiTypingState } =
        React.useContext(Context);

    const baseTextStyle: React.CSSProperties = {
        fontFamily: TestStyle.fontFamily,
        fontSize: TestStyle.fontSize,
        fontWeight: TestStyle.fontWeight,
        lineHeight: TestStyle.lineHeight,
        letterSpacing: TestStyle.letterSpacing,

        wordBreak: "break-word",
        wordWrap: "break-word",
        margin: 0,
        position: "absolute",
        padding: 0,
    };

    return (
        <div
            style={{
                height: "50vw",
                width: "80vw",
                margin: "0 auto",
                position: "relative",
            }}
        >
            <div
                style={{
                    zIndex: 10,
                }}
            >
                <Timer />
            </div>
            <textarea
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    resize: "none",
                    outline: "none",
                    overflow: "hidden",
                    zIndex: 1,
                    color: TestStyle.activeColor,
                    ...baseTextStyle,
                }}
                value={typiTypingState.testTyped}
                onChange={(e) => {
                    updateTypiTypingState(e.target.value);
                }}
                //no text spell check
                spellCheck="false"
            />

            <p
                style={{
                    color: TestStyle.inactiveColor,
                    ...baseTextStyle,
                }}
            >
                {typiTypingState.testText}
            </p>
        </div>
    );
}
