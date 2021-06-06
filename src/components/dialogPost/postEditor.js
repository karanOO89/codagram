import { React} from "react-dom";
import FormTextfield from "./formTextField";
import Box from "@material-ui/core/Box";

import "./postEditor.scss";

const PostEditor = () => {
  return (
    <div className="box">
      <Box color="text.primary">
        <FormTextfield />
      </Box>
    </div>
   
  );
};

export default PostEditor;
