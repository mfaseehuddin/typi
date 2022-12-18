import React from "react";

type Props = {
    children: React.ReactNode;
};

export type user = {
    name: string;
    email: string;
};

type token = {
    token: string;
};

export type typiTypingState = {
    testText: string;
    testTyped: string;
    testStarted: boolean;
    testFinished: boolean;
};

export type typiTestState = {
    testTime: number;
    testResult: number;
    testWPM: number;
    testAccuracy: number;
};

type ContextType = {
    user: user;
    token: token;
    typiTypingState: typiTypingState;
    typiTestState: typiTestState;

    //Business Logic Handlers
    updateTypiTypingState: (state: string) => void;
};

export const Context = React.createContext<ContextType>({
    user: {
        name: "",
        email: "",
    },
    token: {
        token: "",
    },
    typiTypingState: {
        testText: "",
        testTyped: "",
        testStarted: false,
        testFinished: false,
    },
    typiTestState: {
        testTime: 0,
        testResult: 0,
        testWPM: 0,
        testAccuracy: 0,
    },
    updateTypiTypingState: (state: string) => {
        throw new Error("updateTypiTypingState not implemented");
    },
});

const getTestText = () => {
    //TODO: Implement a function to get a random test text from the API
}


export default function TypiAppContext({ children }: Props) {
    //Global Reactive State
    const [user, setUser] = React.useState<user>({
        name: "",
        email: "",
    });

    const [token, setToken] = React.useState<token>({
        token: "",
    });

    const [typiTypingState, setTypiTypingState] =
        React.useState<typiTypingState>({
            testText: "This is typi, a simple typing test app. It is still in development. However, you can still use it to test your typing speed.",
            testTyped: "",
            testStarted: false,
            testFinished: false,
        });

    const [typiTestState, setTypiTestState] = React.useState<typiTestState>({
        testTime: 0,
        testResult: 0,
        testWPM: 0,
        testAccuracy: 0,
    });

    //Business Logic Handlers
    const updateTypiTypingState = (state: string) => {
        /////TODO: Implement TypiTypingState
        //basic implementation
        setTypiTypingState({
            ...typiTypingState,
            testTyped: state,
        });
        //TODO: still have to implement the logic to update the test state properly
    };

    return (
        <Context.Provider
            value={{
                user,
                token,
                typiTypingState,
                typiTestState,
                updateTypiTypingState,
            }}
        >
            {children}
        </Context.Provider>
    );
}
