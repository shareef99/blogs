import CountWithEffect from "./components/CountWithEffect";
import CountWithoutEffect from "./components/CountWithoutEffect";

function App() {
    return (
        <div className="App">
            <h1>Hello Developers</h1>
            <CountWithoutEffect />
            <CountWithEffect />
        </div>
    );
}

export default App;
