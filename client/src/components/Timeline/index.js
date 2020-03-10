import React from "react";
import ReactDOM from "react-dom";
import Slider, { Range } from "rc-slider";
// We can just import Slider or Range to reduce bundle size
// import Slider from "rc-slider/lib/Slider";
// import Range from "rc-slider/lib/Range";
import "./Timeline.css";

// const Slider = require("rc-slider");
// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);

class Timeline extends Slider {
  // The proto of the slider component
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 3,
      value: 1,
      vertical: true
    };
  }

  // Function called onchange to collect the value and set the new value
  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <div class="slideDiv">
        <div>
          TIMELINE
          <Slider />
        </div>
      </div>
    );
  }
}
export default Timeline;
