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
  console.log("total_likes",props.singlePost)
  return (
    // <React.Fragment>
    //   <CssBaseline />
    <div className="postBox">
      <Container fixed>
        <Typography
          component="div"
          style={{
            display: "flex",
            margin: "2em",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            backgroundColor: "rgb(190, 140, 73)",
            minHeight: "25em",
            minWidth: "35em",
          }}
          //           created_at: "2021-06-09T04:42:07.281Z"
          // id: 36
          // image_url: "null"
          // parent_post_id: 1
          // post_text: ""
          // tags: null
          // total_comments: 5
          // total_likes: 5
          // updated_at: "2021-06-09T04:42:07.281Z"
          // user_id: 1
        >
          <PostNav userInfo ={props.singlePost.user_id} />
          <PostImage imageArray={props.singlePost.image_url} />
          <PostText message={props.singlePost.post_text} />
          <PostCode code={props.singlePost.code} />
          <PostToolbar  id={props.singlePost.id} likes={props.singlePost.total_likes} code={props.singlePost.redirect_code} />
          <PostTags tags={props.singlePost.tags} />
          <PostComment
            id={props.singlePost.id}
            commentMarkdown={props.commentMarkdown}
            setCommentMarkdown={props.setCommentMarkdown}
            commentData={props.commentData} setCommentData={props.setCommentData} 
          />
        </Typography>
      </Container>
      </div>
    // </React.Fragment>
  );
};

export default PostBox;
