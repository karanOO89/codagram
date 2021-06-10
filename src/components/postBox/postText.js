import MarkdownView from "../dialogPost/markdownView";


const PostText = (props) => {
  //  console.log("message",props.message)
  return <div className="postText"><MarkdownView markdown = {props.message}/></div>;
};

export default PostText;
