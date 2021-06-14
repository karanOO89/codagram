import MarkdownView from "../dialogPost/markdownView";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import Link from "@material-ui/core/Link";
import "./postCode.scss";

const PostCode = (props) => {

  return (
    <div className="postCode">
      <div className="code">
        <MarkdownView markdown={props.code} />
      </div>
   
    </div>
  );
};

export default PostCode;
