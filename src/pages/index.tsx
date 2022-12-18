import React from "react";
import type { HeadFC, PageProps } from "gatsby";

//import global styles
import "../styles/global.css";
import TypiTest from "../components/TypiTest/TypiTest";

//import ContextProvider
import TypiAppContext from "../components/Context/Context";

const pageStyles: React.CSSProperties = {
    backgroundColor: "var(--mirage-blue)",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const IndexPage: React.FC<PageProps> = () => {
    return (
        <TypiAppContext>
            <main style={pageStyles}>
                <title>Typi | The Simple Typing Test</title>
                <h1 style={{ color: "var(--text-color)" }}>
                    Typi{" "}
                    <span style={{ color: "var(--text-highlight)" }}>
                        The Logical Typing Test
                    </span>
                </h1>

                <TypiTest
                    TestStyle={{
                        fontFamily: "var(--font-type)",
                        fontSize: "var(--typi-font-size)",
                        fontWeight: "bold",
                        lineHeight: "1.5",
                        letterSpacing: "0.05em",
                        activeColor: "var(--text-highlight)",
                        inactiveColor: "var(--text-color-dull)",
                    }}
                />
            </main>
        </TypiAppContext>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
