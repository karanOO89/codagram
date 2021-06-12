import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import "./search.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [query, setQuery] = useState("");

  const history = useHistory();

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .get("/search", {
              params: { query: query },
            })
            .then((res) => {
              console.log(res.data);
              props.history.push("/search");
            });
        }}
      >
        <TextField
          id="search"
          label="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <input type="submit" hidden></input>
      </form>
    </div>
  );
};

export default Search;
