import TextEditor from "../TextEditor";
// import TextField from "@material-ui/core/TextField";
import "./postComment.scss";
import Link from "@material-ui/core/Link";
import PostThreadDialog from "./postThreadDialog";

const PostComment = () => {
  return (
    <div className="postComment">
      <div className="viewThread">
        <PostThreadDialog />
      </div>
      <div className="popComment">Popular Comment:</div>
    </div>
  );
};
export default PostComment;
