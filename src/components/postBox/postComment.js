import "./postComment.scss";
import PostThreadDialog from "./postThreadCopy";

const PostComment = (props) => {
  return (
    <div className="postComment">
      <div className="viewThread">
        <PostThreadDialog
          id={props.id}
          commentMarkdown={props.commentMarkdown}
          setCommentMarkdown={props.setCommentMarkdown}
          commentData={props.commentData} setCommentData={props.setCommentData} 
        />
      </div>
      <div className="popComment">Popular Comment:</div>
    </div>
  );
};
export default PostComment;
