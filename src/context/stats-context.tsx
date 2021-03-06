import React, { useState, useEffect } from "react";

/*
 * Context
 */

export interface StatsContextState {
    totalAttempts: number;
    incrementTotalAttempts: () => void;
    totalCorrectAttempts: number;
    incrementTotalCorrectAttempts: () => void;
    resetStats: () => void;
}

const defaultState: StatsContextState = {
    totalAttempts: 0,
    incrementTotalAttempts: () => {},
    totalCorrectAttempts: 0,
    incrementTotalCorrectAttempts: () => {},
    resetStats: () => {},
};

const StatsContext = React.createContext<StatsContextState>(defaultState);

export default StatsContext;
