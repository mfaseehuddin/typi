import React, { useEffect } from "react";

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
    testError: boolean;
};

export type typiTestState = {
    testTime: number; //in seconds
    testPoints: number;
    testWPM: number;
    testAccuracy: number;
};

type timer = {
    start: () => void;
    stop: () => void;
    reset: () => void;
    getTime: () => number;
};

type ContextType = {
    user: user;
    token: token;
    typiTypingState: typiTypingState;
    typiTestState: typiTestState;

    //Business Logic Handlers
    updateTypiTypingState: (state: string) => void;
    globalTimer: timer | null;
    createTimer: (secondInterval: number, stopValue: boolean) => timer;
    makeGlobalTimer: (timer: timer) => void;
    //API Handlers
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
        testError: false,
    },
    typiTestState: {
        testTime: 0,
        testPoints: 0,
        testWPM: 0,
        testAccuracy: 0,
    },
    updateTypiTypingState: (state: string) => {
        throw new Error("updateTypiTypingState not implemented");
    },
    globalTimer: {
        start: () => {
            throw new Error("globalTimer.start not implemented");
        },
        stop: () => {
            throw new Error("globalTimer.stop not implemented");
        },
        reset: () => {
            throw new Error("globalTimer.reset not implemented");
        },
        getTime: () => {
            throw new Error("globalTimer.getTime not implemented");
        },
    },
    createTimer: (secondInterval: number, stopValue: boolean) => {
        throw new Error("createTimer not implemented");
    },
    makeGlobalTimer: (timer: timer) => {
        throw new Error("makeGlobalTimer not implemented");
    },
});

const getTestText = () => {
    //TODO: Implement a function to get a random test text from the API
};

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
            testText:
                "This is typi, a simple typing test app. It is still in development. However, you can still use it to test your typing speed.",
            testTyped: "",
            testStarted: false,
            testFinished: false,
            testError: false,
        });

    const [typiTestState, setTypiTestState] = React.useState<typiTestState>({
        testTime: 0,
        testPoints: 0,
        testWPM: 0,
        testAccuracy: 0,
    });

    function createTimer(secondInterval: number, stopValue: boolean): timer {
        let timer = 0;
        let interval: any;


        //begining the timer will also set the state of the testStarted to true
        const start = () => {
            if (!stopValue && !interval) {
                interval = setInterval(() => {
                    timer++;
                    setTypiTestState({
                        ...typiTestState,
                        testTime: timer,
                    });
                    setTypiTypingState({
                        ...typiTypingState,
                        testStarted: true,
                    });
                    console.log("Timer Running");
                    
                }, secondInterval);
            }
        };

        const stop = () => {
            clearInterval(interval);
            interval = null;
            setTypiTypingState({
                ...typiTypingState,
                testFinished: true,
            });
        };

        const reset = () => {
            timer = 0;
            setTypiTestState({
                ...typiTestState,
                testTime: timer,
            });

        };

        const getTime = () => {
            return timer;
        };

        return {
            start,
            stop,
            reset,
            getTime,
        };
    } //this is a function that returns an object with the methods start, stop, reset and getTime
    //so on useEffect we can instantiate the timer and call the methods on it and store it in a variable
    //and then that variable can be gotten from the context and used in the Timer component
    //Hence

    const [globalTimer, setGlobalTimer] = React.useState<timer>();

    function makeGlobalTimer(newTimer: timer) {
        //if there is already a timer, throw an error
        if (globalTimer) {
            throw new Error("There is already a timer");
        }
        console.log("newTimer: ", newTimer);
        
        setGlobalTimer(newTimer);
    }

    //Business Logic Handlers
    const updateTypiTypingState = (newInput: string) => {
        /////TODO: Implement TypiTypingState
        //basic implementation
        setTypiTypingState({
            ...typiTypingState,
            testTyped: newInput,
        });
        //TODO: still have to implement the logic to update the test state properly
        //new logic
        /**
         * Points:
         * - 1 point for each correct word
         *
         * WPM:
         * - 1 word = 5 characters
         * - 1 minute = 60 seconds
         * - WPM = (points / 5) / (time / 60)
         *
         * Accuracy:
         * - 1 point for each correct character
         * - 1 point for each correct word
         * - 1 point for each correct space
         * - 1 point for each correct punctuation
         * - 1 point for each correct capital letter
         *
         * - Accuracy = (points / (characters + words + spaces + punctuation + capital letters)) * 100
         *
         *
         * TODO: Implement the logic to update the complete test Context
         * Steps:
         * - Get the test text
         * - Get the test typed
         * --- Compare the test text and test typed character by character, and apply the logic above
         * --- Update test state accordingly
         */

        //if the test had already started, and the user deletes all the text, reset the test
        // if (newInput === "" && typiTypingState.testStarted) {
        //     //reset the test
        //     setTypiTestState({
        //         testTime: 0,
        //         testPoints: 0,
        //         testWPM: 0,
        //         testAccuracy: 0,
        //     });
        // }

        // //if the test has not started, and the user starts typing, start the test
        // if (newInput !== "" && !typiTypingState.testStarted) {
        //     //start the test
        //     setTypiTypingState({
        //         ...typiTypingState,
        //         testStarted: true,
        //     });
        //     //begin a timer
        //     //should i make a setInterval to update the test time?-> yes
        //     //make iife and call it
        //     //iife stands for immediately invoked function expression
        // }

        // //if the test has started, and the user types the test text, finish the test
        // if (
        //     newInput === typiTypingState.testText &&
        //     typiTypingState.testStarted
        // ) {
        //     //finish the test
        //     setTypiTypingState({
        //         ...typiTypingState,
        //         testFinished: true,
        //     });

        //     //stop the timer
        //     //how do i stop the timer?-> i have to make a variable to store the setInterval
        // }
    };
    return (
        <Context.Provider
            value={{
                user,
                token,
                typiTypingState,
                typiTestState,
                updateTypiTypingState,
                globalTimer,
                createTimer,
                makeGlobalTimer,
            } as ContextType}
        >
            {children}
        </Context.Provider>
    );
}
