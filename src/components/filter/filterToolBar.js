import React,{useState} from "react";

import FilterText from "./filterText";
import FilterTools from "./filterTools";
import "./filterToolBar.scss"
const FilterToolBar = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [query, setQuery] = useState("");


  return (
    <div className="filterToolBar">
      <div>
        <FilterText setPostData={props.setPostData} query={query} setQuery={setQuery} selectedValue ={selectedValue} setSelectedValue ={setSelectedValue}/>
      </div>
      <div>
        <FilterTools setPostData={props.setPostData} selectedValue ={selectedValue} setSelectedValue ={setSelectedValue} query={query} setQuery={setQuery} />
      </div>
    </div>
  );
};

export default FilterToolBar;
