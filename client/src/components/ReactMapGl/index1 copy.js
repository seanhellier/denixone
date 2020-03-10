import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
// import Slider2 from "../Slider3";

var TOKEN = 
"pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";


class ReactMapGl extends component {
  const [viewport, setViewport]: useState{
    isFullscreen: true,
    latitude: 40.762,
    longitude: -73.943,
    zoom: 13.05
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        className="mapContainer"
        width="100vw"
        height="120vw"
        position="absolute"
        top="80px"
        mapStyle=
        // "mapbox://styles/seanleifhellier/ck4wtai8j0f0n1cpa682uw9h0"
        "mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      />
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
}

export default ReactMapGl;
