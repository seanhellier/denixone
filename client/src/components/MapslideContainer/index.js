import React, { Component } from "react";
import ReactMapGL from "../ReactMapGl";
import Slider3 from "../Slider3";

onSliderChange = value => {
    // dataSwitch(value);
    console.log(value);
    this.setState({
      value
    });
  };

  onAfterChange = value => {
      
    console.log(value); //eslint-disable-line
  };

export default class MapslideContainer extends Component {  
    constructor(props)  
    
        super(props);  
  
        render()  
        {  
            return(  
                <div>  
                   <Slider3 />
                   <ReactMapGL />
                </div>  
            )  
        }  
    }