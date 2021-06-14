import MarkdownView from "../dialogPost/markdownView";
import UserInfo from "../topNav_props/userInfo";
import "./comment.scss";
const { default: CommentLike } = require("./commentLike");

const Comment = (props) => {
  //   console.log("propsssssss", props);
  // console.log("coment single", props.singleComment);
  return (
    <div className="comment">
      <div>
        {/* <div className="userName">
          <UserInfo />
        </div> */}
        <div className="displayComment">
          <div className="commentBox">
            <MarkdownView markdown={props.singleComment.comment} />
          </div>
          <div>
            <CommentLike
            trendingComment={props.setTrendingComment}
              id={props.singleComment.id}
              post_id={props.singleComment.post_id}
              vote_state={props.singleComment.vote_state}
              vote={props.singleComment.votes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
