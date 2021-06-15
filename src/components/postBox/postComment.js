import "./postComment.scss";
import PostThreadDialog from "./postThreadDialog";
import React, {useEffect, useState } from "react";
import axios from "axios"

const PostComment = (props) => {
  const [trendingComment, setTrendingComment] = useState(props.comment)

  
  return (
    <div className="postComment">
      <div className="viewThread">
        <PostThreadDialog
        //  trendingComment={props.trendingComment}
        //  setTrendingComment={props.setTrendingComment}
          id={props.id}
          commentMarkdown={props.commentMarkdown}
          setCommentMarkdown={props.setCommentMarkdown}
          commentData={props.commentData}
          setCommentData={props.setCommentData}
          setTrendingComment={setTrendingComment}
        />
      </div>
      <div className="popComment">{trendingComment ? trendingComment : null }</div>
    </div>
  );
};
export default PostComment;
