import React, { useState, useEffect } from "react";

import StatsContext from "./stats-context";

/** Stats Local Storage Keys */
enum LSKey {
    TOTAL_CORRECT = "total_correct_attempts",
    TOTAL_ALL = "total_attempts",
}

const StatsContextProvider: React.FC = (props) => {
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [totalCorrectAttempts, setTotalCorrectAttempts] = useState(0);

    const incrementTotalAttempts = () => {
        const newTotalAttempts = totalAttempts + 1;
        setTotalAttempts(newTotalAttempts);
        localStorage.setItem(LSKey.TOTAL_ALL, newTotalAttempts.toString());
    };

    const incrementTotalCorrectAttempts = () => {
        const newTotalCorrectAttempts = totalCorrectAttempts + 1;
        setTotalCorrectAttempts(newTotalCorrectAttempts);
        localStorage.setItem(
            LSKey.TOTAL_CORRECT,
            newTotalCorrectAttempts.toString()
        );
    };

    useEffect(() => {
        const storedTotalAttempts = localStorage.getItem(LSKey.TOTAL_ALL);
        const storedTotalCorrectAttempts = localStorage.getItem(
            LSKey.TOTAL_CORRECT
        );

        if (storedTotalAttempts && storedTotalAttempts !== "-1") {
            setTotalAttempts(+storedTotalAttempts);
        }

        if (storedTotalCorrectAttempts && storedTotalCorrectAttempts !== "-1") {
            setTotalCorrectAttempts(+storedTotalCorrectAttempts);
        }
    }, []);

    const resetStats = () => {
        // Reset total attempts
        setTotalAttempts(0);
        localStorage.setItem(LSKey.TOTAL_ALL, "0");

        // Reset total correct attempts
        setTotalCorrectAttempts(0);
        localStorage.setItem(LSKey.TOTAL_CORRECT, "0");
    };

    return (
        <StatsContext.Provider
            value={{
                totalAttempts,
                incrementTotalAttempts,
                totalCorrectAttempts,
                incrementTotalCorrectAttempts,
                resetStats,
            }}
        >
            {props.children}
        </StatsContext.Provider>
    );
};

export default StatsContextProvider;
