import React, { useContext } from "react";
import TypiAppContext, { Context } from "../components/Context/Context";
import Timer from "../components/Timer/Timer";

type Props = {};

export default function ComponentTest({}: Props) {
    const testComponentName = "Timer";

    return (
        <TypiAppContext>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "var(--mirage-blue)",
                    fontFamily: "-apple-system, Roboto, sans-serif, serif",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

            </div>
        </TypiAppContext>
    );
}
