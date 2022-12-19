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

export const Head: HeadFC = () => {
    return (
        <>
            <title>Typi | The Simple Typing Test</title>
            <meta
                name="description"
                content="Typi is a simple typing test that helps you improve your typing speed and accuracy."
            />
            {/* 
                add these keywords
                "gatsby",
                "gatsbyjs",
                "gatsby-plugin-typescript",
                "mfaseehuddin",
                "typi",
                "typing",
                "typing test",
                "typing speed",
                "typing speed test",
                "typing speed test online",
                "typing speed test free",
                "typing speed test 10fastfingers",
                "typing speed test 10fastfingers.com",
                "typing speed test 10fastfingers.com free",
                "typing  speed test 10fastfingers.com free online",
                "typing speed test 10fastfingers.com free online typing test",
                "typing speed test 10fastfingers.com free online typing test 1 minute",

                "lums",
                "lums typing test",
                "lums typing test 10fastfingers",
                "project mirage",
                "project mirage typing test",
                "project mirage typing test 10fastfingers",
                "miraj",
                "miraj typing test",
                "promirage.com",
                "promirage.com typing test",
                "promirage.com typing test 10fastfingers",
                "typi.promirage.com",
                "typi.promirage.com typing test",
                "typi.promirage.com typing test 10fastfingers"
            */}

            <meta
                name="keywords"
                content="gatsby, gatsbyjs, gatsby-plugin-typescript, mfaseehuddin, typi, typing, typing test, typing speed, typing speed test, typing speed test online, typing speed test free, typing speed test 10fastfingers, typing speed test 10fastfingers.com, typing speed test 10fastfingers.com free, typing speed test 10fastfingers.com free online, typing speed test 10fastfingers.com free online typing test, typing speed test 10fastfingers.com free online typing test 1 minute, lums, lums typing test, lums typing test 10fastfingers, project mirage, project mirage typing test, project mirage typing test 10fastfingers, miraj, miraj typing test, promirage.com, promirage.com typing test, promirage.com typing test 10fastfingers, typi.promirage.com, typi.promirage.com typing test, typi.promirage.com typing test 10fastfingers"
            />
            <meta name="author" content="Muhammad Faseeh Uddin" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="var(--mirage-blue)" />
        </>
    );
};
