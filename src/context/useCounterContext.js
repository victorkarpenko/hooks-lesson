import { useContext } from "react"
import CounterContext from "./counterContext"

const useCounterContext = () => {
    const context = useContext(CounterContext);

    if(!context) {
        throw new Error('useCounterContext only with CounterContextProvider');
    }

    return context;
}

export default useCounterContext;