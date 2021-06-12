import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import "./filterTools.scss";
import CachedIcon from "@material-ui/icons/Cached";
// const GreenRadio = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);

export default function FilterTools(props) {
  const handleChange = (event) => {
    props.setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div className="filterRadio">
        <div>
          Tags
          <Radio
            checked={props.selectedValue === "tags"}
            onChange={handleChange}
            value="tags"
            name="tags"
            // inputProps={{ "aria-label": "A" }}
          />
        </div>
        <div>
          Posts
          <Radio
            checked={props.selectedValue === "posts"}
            onChange={handleChange}
            value="posts"
            name="posts"
            // inputProps={{ "aria-label": "B" }}
          />
        </div>
        <div>
          <CachedIcon />
        </div>
      </div>
    </div>
  );
}

// const GreenRadio = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);
