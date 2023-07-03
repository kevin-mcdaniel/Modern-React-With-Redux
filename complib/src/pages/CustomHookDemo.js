import useCounter from "../hooks/use-counter";
import Button from "../components/Button";


function CounterPage({ initialCount }){

    //3 destructure the return and pass any variables that were needed in the hook
    const {count, increment} = useCounter(initialCount);

    //break this out into a custom in the use-counter file
    /* const [count, setCount] = useState(initialCount);

    useEffect(()=>{
        console.log(count);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
        
    } */

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button primary onClick={increment}>Increment</Button>
        </div>
    )
}

export default CounterPage;