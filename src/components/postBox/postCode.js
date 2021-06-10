import MarkdownView from "../dialogPost/markdownView";

const PostCode = (props) => {
  return (
    <div className="postCode">
      <MarkdownView markdown={props.code} />
    </div>
  );
};

export default PostCode;
