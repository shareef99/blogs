import "./App.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function App() {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Smart Backspace First",
                "Smart Backspace Second",
                "Candy",
                "More Strings",
            ], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "!",
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="App">
            {" "}
            <h1>Typing effect demo</h1>{" "}
            <div>
                {/* Element to display typing strings */}
                <span ref={el}></span>
            </div>
        </div>
    );
}

export default App;
