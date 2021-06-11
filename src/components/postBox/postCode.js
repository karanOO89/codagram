import MarkdownView from "../dialogPost/markdownView";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import Link from "@material-ui/core/Link";
import "./postCode.scss";

const PostCode = (props) => {
  const visitLink = () => {
    const code = encodeURIComponent(props.redirect_code.slice(5, -3));
    console.log(code);
    let url = `http://www.pythontutor.com/javascript.html#code=${code}&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D`;
    window.open(url, "_blank");
  };
  return (
    <div className="postCode">
      <div className="code">
        <MarkdownView markdown={props.code} />
      </div>
      {props.code ? (
        <div>
          <Link size="small" color="inherit" onClick={visitLink}>
            <ShareTwoToneIcon fontSize="small" />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default PostCode;
