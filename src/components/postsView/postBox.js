import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./postBox.scss";
import PostText from "../postBox/postText";
import PostImage from "../postBox/postImage";
import PostToolbar from "../postBox/postToolbar";
import PostNav from "../postBox/postNav";
import PostComment from "../postBox/postComment";
import PostCode from "../postBox/postCode";
import PostTags from "../postBox/postTags";

const PostBox = (props) => {
  // console.log("total_likes", props.singlePost.image_url);
  return (
    <div className="postBox">
      <div>
        <PostNav userInfo={props.singlePost.user_id} />
      </div>
      {JSON.parse(props.singlePost.image_url) ? 
      <div>
        <PostImage imageArray={props.singlePost.image_url} />
      </div>
      : null}
      <div>
        <PostText message={props.singlePost.post_text} />
      </div>
      <div>
        <PostCode code={props.singlePost.code} redirect_code={props.singlePost.redirect_code}/>
      </div>
      <div>
        <PostToolbar
          id={props.singlePost.id}
          likes={props.singlePost.total_likes}
          
        />
      </div>
      <div>
        <PostTags tags={props.singlePost.tags} />
      </div>
      <div>
        <PostComment
          id={props.singlePost.id}
          commentMarkdown={props.commentMarkdown}
          setCommentMarkdown={props.setCommentMarkdown}
          commentData={props.commentData}
          setCommentData={props.setCommentData}
        />
      </div>
    </div>
  );
};

export default PostBox;
