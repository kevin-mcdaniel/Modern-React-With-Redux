import { useState, useEffect } from "react";
//Hooks start with use...
function useCounter(initialCount){
    //1. Copy out all non jsx code
    
    const [count, setCount] = useState(initialCount);

    useEffect(()=>{
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
        
    }
    //2. return the values that ar needed in the component. Make sure names are descriptive.
    return {
        count,
        increment
    }
}

export default useCounter;