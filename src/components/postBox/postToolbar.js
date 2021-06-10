import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import BookTwoToneIcon from "@material-ui/icons/BookTwoTone";
import RestaurantTwoToneIcon from "@material-ui/icons/RestaurantTwoTone";
import Link from "@material-ui/core/Link";
import "./postToolbar.scss";
import PostComment from "./postComment";
const PostToolbar = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={
            {
              // display: "flex",
              // flexDirection:"column",
              // alignItems: "center",
              // justifyContent: "space-between",
              // backgroundColor: "rgb(190, 255, 73)",
              // height: "3em",
            }
          }
        >
          <div className="tool">
            <div className="toolUpper">
              <div>
                <Link
                  size="small"
                  color="inherit"
                  onClick={(e) => console.log("hey")}
                >
                  <FavoriteTwoToneIcon fontSize="small" />
                </Link>

                <Link
                  size="small"
                  color="inherit"
                  onClick={(e) => console.log("hey")}
                >
                  <ShareTwoToneIcon fontSize="small" />
                </Link>
                <Link
                  size="small"
                  color="inherit"
                  onClick={(e) => console.log("hey")}
                >
                  <BookTwoToneIcon fontSize="small" />
                </Link>
              </div>
              <div>
                <Link
                  size="small"
                  color="inherit"
                  onClick={(e) => console.log("hey")}
                >
                  <RestaurantTwoToneIcon fontSize="small" />
                </Link>
              </div>
            </div>
            <div>
            </div>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PostToolbar;
