import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import "./search.scss";
import axios from "axios";

const Search = () => {
  const [newQuery, setNewQuery] = useState("");
  const [query, setQuery] = useState("");

 
  useEffect(() => {
    axios
    .get("/search", {
      params: { query: newQuery },
    })
    .then(() => {});
  }, [query]);
  return (
    <div className="search">
      <TextField
        id="search"
        label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
