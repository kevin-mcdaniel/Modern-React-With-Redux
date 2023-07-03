import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        //dispatch(fetchUsers()).then(()=>{}).catch(()=>{}); 
        //then doesn't work like it normally does, it gets called regardless if the 
        //request succeds or fails, fullfilled or rejecteded is passed along
        //unwrap adds an additional promise that follows the normal rules

        setIsLoading(true);
        dispatch(thunk(arg))
        .unwrap()
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    }, [dispatch, thunk])

    return [runThunk, isLoading, error];
}

