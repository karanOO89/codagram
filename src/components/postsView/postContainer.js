import PostBox from "./postBox";
import React from "react";
import "./postContainer.scss";

const PostContainer = (props) => {
  return (
    <div className="postContainer">
      {props.postData
        .slice(0)
        .reverse()
        .map((item, index) => {
          return (
            <div key={index}>
              <PostBox
                trendingComment={props.trendingComment}
                trendingComment={props.setTrendingComment}
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
