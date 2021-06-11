import MarkdownView from "../dialogPost/markdownView";
import"./postText.scss"


const PostText = (props) => {
  //  console.log("message",props.message)
  return <div className="postText"><MarkdownView markdown = {props.message}/></div>;
};

export default PostText;
