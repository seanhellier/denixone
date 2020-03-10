import React from "react";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
// import ReactMapGl from "./ReactMapGl";
import "./Slider3.css";

function log(value) {
  console.log(value); //eslint-disable-line
}

class Slider3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2018
    };
  }
}

onSliderChange = value => {
  console.log(value);
};
// switch (this.setState({ value })) {
//   case 2018:
//     //styles/daniel218/ck4foemqf0bcx1co45ueme2hd
//     mapbox: console.log("switch 2018");
//     break;
//   case 2017:
//     "mapbox://styles/daniel218/ck52f7j01lii71co4cpbzl8kp";
//     console.log("switch 2017");
//     break;
//   case 2016:
//     //styles/daniel218/ck52f6er28cdi1cp5jfxfe7q3
//     mapbox: console.log("switch 2016");
//     break;
//   default:
//     //styles/daniel218/ck4foemqf0bcx1co45ueme2hd
//     mapbox: console.log("its not my default");

onAfterChange = value => {
  console.log(value); //eslint-disable-line
};

// render();
return (
  <div className="styleslider">
    <Slider
      id="slider"
      value={this.state.value}
      onChange={this.onSliderChange}
      onAfterChange={this.onAfterChange}
      defaultValue={2018}
      min={2016}
      max={2018}
      step={1}
      vertical
      barClassName="stylebar"
    />
  </div>
);
export default Slider3;
