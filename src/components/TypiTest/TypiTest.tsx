import React from "react";

import { Context } from "../Context/Context";

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
        // fontFamily: "var(--font-type)",
        // fontSize: "var(--typi-font-size)",
        // fontWeight: "bold",
        // lineHeight: "1.5",
        // letterSpacing: "0.05em",
        // wordBreak: "break-word",
        // wordWrap: "break-word",

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
            <textarea
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    resize: "none",
                    outline: "none",
                    //no overflow
                    overflow: "hidden",
                    zIndex: 1,
                    //no text spell check
                    // WebkitTextStroke: "0.1px transparent",
                    // color: "var(--mirage-orange)",

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
