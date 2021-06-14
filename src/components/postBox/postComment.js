import "./postComment.scss";
import PostThreadDialog from "./postThreadDialog";
import React, {useEffect, useState } from "react";
import axios from "axios"

const PostComment = (props) => {
  console.log("props.trendingComment",props.trendingComment);
    useEffect(() => {
     const id = props.id
      axios.get(`/${id}/favComment`).then((res) => {
        // console.log(res.data)
        // props.setTrendingComment([...res.data]);

      });
    }, []);
  return (
    <div className="postComment">
      <div className="viewThread">
        <PostThreadDialog
         trendingComment={props.trendingComment}
         trendingComment={props.setTrendingComment}
          id={props.id}
          commentMarkdown={props.commentMarkdown}
          setCommentMarkdown={props.setCommentMarkdown}
          commentData={props.commentData}
          setCommentData={props.setCommentData}
        />
      </div>
      <div className="popComment">{props.trendingComment ? props.trendingComment : null }</div>
    </div>
  );
};
export default PostComment;
