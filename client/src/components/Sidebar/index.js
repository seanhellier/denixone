import React from "react";
import { ListGroup } from "reactstrap";
// import { render } from "react-dom";

function Sidebar() {
  return (
    <div>
      <menu type="toolbar">
        <li>
          <button className="yearbutton" type="button">
            2018
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2017
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2016
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2015
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2014
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2013
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2012
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2011
          </button>
        </li>
        <li>
          <button className="yearbutton" type="button">
            2010
          </button>
        </li>
      </menu>
    </div>
  );
}

// class Sidebar extends ListGroup {
//   tileset18 = () => {
//     // Get call to mapbox api for the 2018 tileset
//   };

//   render() {
//     return (
//       <ListGroup defaultActiveKey="#link1">
//         <ListGroup.Item action href="#link1">
//           Link 1
//         </ListGroup.Item>
//         <ListGroup.Item action onClick={"hello"}>
//           2018{" "}
//         </ListGroup.Item>
//       </ListGroup>
//     );
//   }
// }

export default Sidebar;

// render() {
//     return (
//         <ListGroup defaultActiveKey="#link1">
//         <ListGroup.Item action href="#link1">
//           Link 1
//         </ListGroup.Item>
//         <ListGroup.Item action onClick={"hello"}>
//           2018{" "}
//         </ListGroup.Item>
//       </ListGroup>
//     )
// }
