import PostBox from "./postBox";
import React from "react";
import "./postContainer.scss";

const PostContainer = (props) => {
  // console.log("shahsakxjaxkjax",props.postData);

  
  // console.log("new array",newArray);
  return (
    <div className="postContainer">
      {props.postData
        .map((item, index) => {
          // console.log("postttttttttttttttttttttt", item);
          return (
            <div key={index}>
              <PostBox
                commentData={props.commentData}
                setCommentData={props.setCommentData}
                singlePost={item}
                commentMarkdown={props.commentMarkdown}
                setCommentMarkdown={props.setCommentMarkdown}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PostContainer;
