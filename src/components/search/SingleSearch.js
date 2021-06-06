import React from "react-dom";
//import SearchResult from "../SearchResult";
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
import "./singlesearch.scss";
import "../dialogPost/postEditor";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Background from "./background";
import Follow from "./follow";
import Avatar from "@material-ui/core/Avatar";
import FollowersNumber from "./followersnumber";

const SingleSearch = () => {
  return (
    <div>
      <div>
        <Background />
      </div>
      <div>
        <CssBaseline />
        <Container
          maxWidth="sm"
          style={{
            backgroundColor: "#cfe8fc",
            width: "50vw",
            height: "20vh",
          }}
        >
          <Typography component="div">
            <div class="searchBody">
              <div class="header">
                <div class="username">
                  <article>
                    {/* <div>logo</div> */}
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <div class="user_text">username</div>
                  </article>
                </div>
                <div>
                  <Follow />
                </div>
              </div>
              <div class="footer">
                <FollowersNumber />
              </div>
            </div>
          </Typography>
        </Container>
      </div>
    </div>
  );
};
export default SingleSearch;
