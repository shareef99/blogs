import { useState } from "react";

export default function CountWithoutEffect() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(count * 2);
    const handleCount = () => {
        setCount(count + 1);
        setDoubleCount(count * 2); // This will not use the latest value of count
    };
    return (
        <div className="App">
            <div>
                <h2>Count Without useEffect</h2>
                <h3>Count: {count}</h3>
                <h3>Count * 2: {doubleCount}</h3>
                <button onClick={handleCount}>Count++</button>
            </div>
        </div>
    );
}
