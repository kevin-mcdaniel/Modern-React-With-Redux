import { useReducer } from "react"
import Button from "../components/Button";
import Panel from "../components/Panel"

//convention to make it easer for developers to not create typos. ALL caps another convention that says this is
//an action type
const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_ADD_VALUE = 'set-add-value'
const ADD_VALUE = 'add-value';

const reducer = (state, action) =>{


    //lots of ways to do this, this is the popular way
    //use the action object. Will have a type and an optional payload.
    /*
        dispatch({
            type: "STATE PROPERTY",
            payload: "VALUE TO BE UPDATED"
        })
        need to add the logic in the reducer function
    */


    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count+1
            };
        
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count-1
            };

        case SET_ADD_VALUE: 
            return{
                ...state,
                valueToAdd: action.payload
            };
        
        case ADD_VALUE:
            return{
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd:0
            }
        default:
            //either case is technically correct. return if no big deal
            //throw new Error(`unexpected action type ${action.type}`)
            return state;
    }

    
};

function UseReducerDemo({initialCount}){

    /* 
    useState requires a new variable for each piece of state
    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setValueToAdd] = useState(0); */
   
    const [state, dispatch] = useReducer(reducer, {
        //all state required in the component
        count: initialCount,
        valueToAdd: 0
    })
    console.log(state)
    //modify existing count with a value
    const increment = () => {
        //setCount(count+1);
        dispatch({
            type:INCREMENT_COUNT
        });
    }
    const decrement = () => {
        //setCount(count - 1);
        dispatch({
            type:DECREMENT_COUNT
        });
    }

    const handleChange = (event) =>{
        const value = parseInt(event.target.value, 10) || 0;
        console.log(value)
        dispatch({
            type: SET_ADD_VALUE,
            payload: value
        })
       //setValueToAdd(value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({
            type: ADD_VALUE            
        });
        //two pieces of state closely related
        /* setCount(count + valueToAdd);
        setValueToAdd(0); */
    }
    return (
        <div>
            <Panel className="m-3">
                <h1 className="text-lg" >Count is {state.count}</h1>
                <div className="flex gap-1">
                    <Button primary onClick={increment}>Increment</Button>
                    <Button secondary onClick={decrement}>Decrement</Button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Add a lot!</label>
                    <input type="number" value={state.valueToAdd || ""} onChange={handleChange} className="p-1 m-3 bg-gray-50 border border-gray-300" />
                    <Button primary>Add It!</Button>
                </form>
            </Panel>
            
        </div>
    )
}

export default UseReducerDemo;