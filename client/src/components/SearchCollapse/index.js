// import React, { useState } from "react";
// import { Button, Fade, Navbar, Container, Row, Col } from "reactstrap";
// import "./Collapse.css";
// // import Searchgrid from "../Searchgrid";
// import Pricerange from "../Selects/Pricerange";
// import BuildingType from "../Selects/BuildingType";
// import Zoned from "../Selects/Zoned";
// import YearSelect from "../Selects/Year";

// const SearchCollapse = props => {
//   const [fadeIn, setFadeIn] = useState(true);

//   const toggle = () => setFadeIn(!fadeIn);

//   return (
//     <div>
//       <Navbar className="Snavbar navbar-expand-lg">
//         <Button color="info" onClick={toggle} size="sm" className="filterbtn">
//           Filter
//         </Button>
//         <Fade in={fadeIn} tag="h5" className="mt-3 filterbtn">
//           <div className="fadebtn">
//             <Pricerange />
//             <BuildingType />
//             <Zoned />
//             <YearSelect />
//             <div className="nudge">
//               <Button
//                 color="info"
//                 onClick={props}
//                 size="sm"
//                 className="submitbutton"
//               >
//                 Search
//               </Button>
//             </div>
//           </div>
//         </Fade>
//       </Navbar>
//     </div>
//   );
// };

// export default SearchCollapse;
