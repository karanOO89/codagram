import TextField from "@material-ui/core/TextField";
import Fragment from "react-dom";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <TextField
        id="outlined-multiline-flexible"
        label="Search"
        variant="filled"
      />
    </div>
  );
};

export default Search;
