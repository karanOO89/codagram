import React,{ useState} from "react";
import FormTextfield from "./formTextField";
import Box from "@material-ui/core/Box";

import "./postEditor.scss";

const PostEditor = (props) => {
  // const [markdown, setMarkdown] = useState("# sup") 

  return (
    <div className="box">
      <Box color="text.primary">
        <FormTextfield markdown={props.markdown} setMarkdown={props.setMarkdown}/>
      </Box>
    </div>
   
  );
};

export default PostEditor;
