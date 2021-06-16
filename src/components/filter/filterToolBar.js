import React, { useState } from "react";

import FilterText from "./filterText";
import FilterTools from "./filterTools";
import "./filterToolBar.scss";
const FilterToolBar = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div
      className="filterToolBar"
      style={{backgroundColor:"#212121"}}
    >
      <div style={{display:"flex", paddingLeft: "30em",opacity:".8" }}>
        <FilterText
          setPostData={props.setPostData}
          query={query}
          setQuery={setQuery}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />

        <FilterTools
          setPostData={props.setPostData}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          query={query}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
};

export default FilterToolBar;
