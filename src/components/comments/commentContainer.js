import PostEditor from "../dialogPost/postEditor";
import MultiImageUpload from "../upload/multiImageUpload";
import Comment from "./comment";
import "./commentContainer";
import styled from "styled-components";
import MarkdownView from "../dialogPost/markdownView";
const CommentContainer = (props) => {
  // console.log(props);
  // console.log("commmmmeeennnttss", props.commentData);
  const comments = props.commentData
    .slice(0)
    // .reverse()
    .map((comment, i) => {
      if (i % 2 === 0) {
        return (
          <div
            style={{
              backgroundColor: "#212121",
            }}
          >
            <Comment
              key={i}
              singleComment={comment}
              setTrendingComment={props.setTrendingComment}
            />
          </div>
        );
      } else {
        return (
          <div
            style={{
              backgroundColor: "#424242",
            }}
          >
            <Comment
              key={i}
              singleComment={comment}
              setTrendingComment={props.setTrendingComment}
            />
          </div>
        );
      }
    });
  return (
    <div
      className="commentContainer"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column-reverse",
        // height: "56em",
        flexDirection: "column",
        justifyContent: " space-between",
      }}
    >
      <div
        className="displayComment"
        style={{
          // display:"flex",

          width: "100%",
          wordWrap: "break-word",
          height: "20px",
          bottom: "550px",
        }}
      >
        {comments}
      </div>
      <div
        style={{
          width: "0em",
          minHeight: "20em",
          // marginBottom: "0px",
          // position: "fixed",
          // bottom: "80px",
          // overflowY: "scroll",
          // right: "410px",
        }}
      >
        <StyledApp>
          <StyledPreview>
            <div
              className="preview"
              // style={{ overflowWrap: "break-word" }}
            >
              <MarkdownView markdown={props.markdown} />
            </div>
          </StyledPreview>
          <div>
            <StyledEditor>
              <textarea
                placeholder="type here..."
                onChange={(e) => props.setMarkdown(e.target.value)}
                value={props.markdown}
              />
            </StyledEditor>
          </div>
        </StyledApp>
        {/* <MultiImageUpload files={props.files}
                setFiles={props.setFiles} /> */}

        {/* <PostEditor markdown={props.markdown} setMarkdown={props.setMarkdown} /> */}
      </div>
    </div>
  );
};
export default CommentContainer;

const StyledApp = styled.div`
  display: flex;

  background-color: transparent;
  flex-direction: column;
  justify-content:space-between;
  align-items-center;
  width: 60vh;
  height: 29vh;
  margin-top: 1em;
  

  div {
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
  }
  // .edit{
    
  //   padding-bottom:.5em;
  //   postion:fixed;
  // }
`;

const StyledEditor = styled.div`
  position: absolute;
  left: 0;
  bottom: 20px;
  background-color: #212121;

  width: 100%;
  textarea {
    background-color: #212121;
    color: #bdbdbd;
    opacity: 0.6;
    width: 100%;
    padding: 5px;
    height: 10vh;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    resize: none;
  }
`;

const StyledPreview = styled.div`
  display: block;
  position: absolute;
  border-top: 1px solid #212121;
  overflow-y: scroll;
  left: 20px;
  bottom: 130px;
  height: 5em;
  width: 87.8vh;

  overflow-wrap: break-word;
  pre {
    width: 100%;
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`;
