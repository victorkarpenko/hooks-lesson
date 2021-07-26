import React, { useState } from 'react';
import CounterContext from "./counterContext"

const CounterContextProvider = (props) => {
    const [counter, setCounter] = useState(0);

    const minusCounter = (step) => {
        setCounter(counter - step)
    }

    const plusCounter = (step) => {
        setCounter(counter + step)
    }

    const resetCounter = (step) => {
        setCounter(0)
    }

    return (
        <CounterContext.Provider value={{
            counter,
            minusCounter,
            plusCounter,
            resetCounter,
        }}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;