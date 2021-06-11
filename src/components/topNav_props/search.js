import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import "./search.scss";
import axios from "axios";

const Search = () => {
  const [newQuery, setNewQuery] = useState("");
  const [query, setQuery] = useState("");

  // const handleSearch = (e) => {
  //   // setSearch(e.target.value)

  //   setQuery(e.target.value);
  // };
  useEffect(() => {
    axios
    .get("/search", {
      params: { query: newQuery },
    })
    .then(() => {});
  }, [query]);
  // console.log(search);
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

// const handleSearch = (event) => {
//   setState({posts_search: []});
//   const search_query = event.target.value
//   axios.get('/api/get/searchpost', {params: {search_query: search_query} })
//     .then(res => res.data.length !== 0
//                    ? setState({posts_search: [...res.data]})
//                    : null )
//     .catch(function (error) {
//       console.log(error);
//       })
//   }

// ....

//    <TextField
//      id="search"
//      label="Search"
//      margin="normal"
//      onChange={handleSearch}
//    />
