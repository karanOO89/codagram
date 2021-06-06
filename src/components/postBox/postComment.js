import "./postComment.scss";
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
