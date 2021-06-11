import PostBox from "./postBox";
import React from "react";

const PostContainer = (props) => {

  return (
    <div >
        {props.postData.slice(0).reverse().map((item, index) => {
          return <div  key={index}><PostBox commentData={props.commentData} setCommentData={props.setCommentData} singlePost={item} commentMarkdown = {props.commentMarkdown} setCommentMarkdown ={props.setCommentMarkdown}/></div>;
        })}
    </div>
  );
};

export default PostContainer;
