import TextField from "@material-ui/core/TextField";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <TextField
        id="outlined-multiline-flexible"
        label="Search"
        variant="filled"
        size="small"
      />
    </div>
  );
};

export default Search;
