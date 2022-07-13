import "./App.css";
import ReactSlider from "react-slider";
import { useState } from "react";

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  return (
    <main>
      <div className="container">
        <ReactSlider
          defaultValue={[min, max]}
          className="slider"
          trackClassName="tracker"
          min={0}
          max={500}
          minDistance={50}
          step={50}
          withTracks={true}
          pearling={true}
          renderThumb={(props) => {
            return <div {...props} className="thumb"></div>;
          }}
          renderTrack={(props) => {
            return <div {...props} className="track"></div>;
          }}
          onChange={([min, max]) => {
            setMin(min);
            setMax(max);
          }}
        />
        <div className="values-wrapper">
          <p>
            Min Value:
            <span>{min}</span>
          </p>
          <p>
            Max Value:
            <span>{max}</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
