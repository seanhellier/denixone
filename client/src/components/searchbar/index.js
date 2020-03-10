import React from "react";
import "./searchbar.css";
import Pricerange from "../Selects/Pricerange";
import SearchCollapse from "../SearchCollapse";

function Searchbar() {
  return (
    <div>
      <navbar className="drops navbar navbar-expand-lg">
        <SearchCollapse />
      </navbar>
    </div>
  );
}

export default Searchbar;
