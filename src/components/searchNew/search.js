import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import "./search.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    color: '#00a152',
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const Search = (props) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [query, setQuery] = useState("");

  const history = useHistory();

  const style = {
    background: '#00a152',
    borderRadius: 3,
    border: 0,
    color: '#e5e5ea',
    height: 32,
    padding: '10px 10px',
    margin: 0,
  };

  return (
    <div className="search">
      <form
        id="search-box"
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
          style={style}
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
