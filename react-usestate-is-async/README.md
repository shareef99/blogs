# Hello Developers 👋

I would like to share something I recently got to know, so the background is, in my project I was using **useState** value right after updating it and I was getting previous value(not updated value) and to my surprise I found out that **useState hook is asynchronous**

## what it is?

Basically the thing is you don't get update value right after updating _state_.

## What is the work around/solution?

We can use **useEffect** hook, and add our state in the dependence array, and we will always get the updated value.

## Show me the code 🤩🤩🤩

```jsx
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
```

-   Here we have very simple and stright forward component.
-   On button click we are updating two states and one state is dependent on other state.
-   The _doubleCount_ will be one step behind _count_.
-   Check out the [Live Demo](https://use-state-is-async.vercel.app)

## Solving this issue 🧐🧐🧐

This can be easily solve with _useEffect_ hook, let's see the code

```jsx
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
```

-   Here, when ever count changes we are updating **doubleCount**
-   Check out the [live Demo](https://use-state-is-async.vercel.app)

Closing here 👋👋👋

> This is **Shareef**.

> [Live demo](https://use-state-is-async.vercel.app/)

> [Read it on Dev.to](https://dev.to/shareef/react-usestate-hook-is-asynchronous-1hia)
