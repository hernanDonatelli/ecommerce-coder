import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("El contador ha sido actualizado", count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={() => increment()}>+</button>
            <h1>{count}</h1>
            <button onClick={() => decrement()}>-</button>
        </div>
    );
};

export default Counter;
