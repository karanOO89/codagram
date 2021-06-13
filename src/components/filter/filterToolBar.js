import React from "react";

import FilterText from "./filterText";
import FilterTools from "./filterTools";
import "./filterToolBar.scss"
const FilterToolBar = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <div className="filterToolBar">
      <div>
        <FilterText setPostData={props.setPostData} selectedValue ={selectedValue} setSelectedValue ={setSelectedValue}/>
      </div>
      <div>
        <FilterTools selectedValue ={selectedValue} setSelectedValue ={setSelectedValue} />
      </div>
    </div>
  );
};

export default FilterToolBar;
