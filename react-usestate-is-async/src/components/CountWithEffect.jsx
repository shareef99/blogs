import { useState, useEffect } from "react";

export default function CountWithEffect() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(count * 2);
    const handleCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setDoubleCount(count * 2); // This will always use latest value of count
    }, [count]);

    return (
        <div>
            <h2>Count with useEffect</h2>
            <h3>Count: {count}</h3>
            <h3>Count * 2: {doubleCount}</h3>
            <button onClick={handleCount}>Count++</button>
        </div>
    );
}
