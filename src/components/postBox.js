import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./postBox.scss";
import PostText from "./postBox/postText";
import PostImage from "./postBox/postImage";
import PostToolbar from "./postBox/postToolbar";
import PostNav from "./postBox/postNav";
import axios from 'axios';
const PostBox = (props) => {
 
  console.log("post daatatatat",props.postData)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            backgroundColor: "rgb(190, 140, 73)",
            minHeight: "25em",
            minWidth: "35em",
          }}
        >
          <PostNav />
          <PostImage />
          <PostText />
          <PostToolbar />          
          
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PostBox;
