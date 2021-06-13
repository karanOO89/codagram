import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import "./filterText.scss";
import axios from "axios";
// import { Redirect } from "react-router-dom";
import React from "react";
// import { useHistory } from "react-router-dom";

const FilterText = (props) => {

  //   const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get("/search", {
        params: { query: props.query, filterParam: props.selectedValue },
      })
      .then((res) => {
        console.log(res.data);
        props.setPostData(res.data)
        //   props.history.push("/search");
      });
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <TextField
          id="search"
          label="Search"
          value={props.query}
          onChange={(e) => {
            props.setQuery(e.target.value);
          }}
        />
        <input type="submit" hidden></input>
      </form>
    </div>
  );
};
export default FilterText;
