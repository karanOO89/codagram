import Comment from "./comment";
const CommentContainer = (props) => {
  console.log("commmmmeeennnttss", props.commentData);
  const comments = props.commentData.slice(0).reverse().map((comment, i) => {
    return (
        <Comment key={i} singleComment={comment} />
    );
  });
  return (
    <div className="commentContainer">
      <div>{comments}</div>
      <div></div>
    </div>
  );
};
export default CommentContainer;
