import React from "react";
import "./Map.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw";

class Mapcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -73.8984,
      lat: 40.6891,
      zoom: 9.74
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/daniel218/ck4foemqf0bcx1co45ueme2hd",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Mapcomp;

// code from mapbox react tutorial
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsMjE4IiwiYSI6ImNrNDI2M3dhNjAxbXQza21rMmJrZTNpeGIifQ.QtSS2CZJCCb4EasGfmteVw';

// class Application extends React.Component {
// constructor(props) {
// super(props);
// this.state = {
// lng: 5,
// lat: 34,
// zoom: 2
// };
// }

// componentDidMount() {
// const map = new mapboxgl.Map({
// container: this.mapContainer,
// style: 'mapbox://styles/mapbox/streets-v11',
// center: [this.state.lng, this.state.lat],
// zoom: this.state.zoom
// });

// map.on('move', () => {
// this.setState({
// lng: map.getCenter().lng.toFixed(4),
// lat: map.getCenter().lat.toFixed(4),
// zoom: map.getZoom().toFixed(2)
// });
// });
// }

// render() {
// return (
// <div>
// <div className='sidebarStyle'>
// <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
// </div>
// <div ref={el => this.mapContainer = el} className='mapContainer' />
// </div>
// )
// }
// }

// ReactDOM.render(<Application />, document.getElementById('app'));
