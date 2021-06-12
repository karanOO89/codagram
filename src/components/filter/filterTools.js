import React,{useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import "./filterTools.scss";
import CachedIcon from "@material-ui/icons/Cached";
import axios from "axios"


export default function FilterTools(props) {
  const handleChange = (event) => {
    props.setSelectedValue(event.target.value);
  };
  const resetValue = () => {
    // if( props.setSelectedValue || )
    props.setSelectedValue("");
    props.setQuery("");
    axios
      .get("/post", {
        params: { query: props.query, filterParam: props.selectedValue },
      })
      .then((res) => {
        console.log(res.data);
        props.setPostData(res.data)
        //   props.history.push("/search");
      });
    // history.push("/");
  };
  const GreenRadio = withStyles({
    root: {
      color: green[0],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  return (
    <div>
      <div className="filterRadio">
        <div>
          <CachedIcon onClick={resetValue} />
        </div>
        <div >
          Tags
          <GreenRadio
            checked={props.selectedValue === "tags"}
            onChange={handleChange}
            value="tags"
            name="tags"
            
            // inputProps={{ "aria-label": "A" }}
          />
        </div>  
        <div>
          Posts
          <GreenRadio
            checked={props.selectedValue === "posts"}
            onChange={handleChange}
            value="posts"
            name="posts"
            // inputProps={{ "aria-label": "B" }}
          />
        </div>
      </div>
    </div>
  );
}

