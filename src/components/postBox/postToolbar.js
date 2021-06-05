import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import BookTwoToneIcon from "@material-ui/icons/BookTwoTone";
import RestaurantTwoToneIcon from "@material-ui/icons/RestaurantTwoTone";
const PostToolbar = () => {
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
            backgroundColor: "rgb(190, 255, 73)",
            
            height: "3em",
          }}
        >
          <div className="toolFirst">
            <FavoriteTwoToneIcon />
            <ShareTwoToneIcon />
            <BookTwoToneIcon />
          </div>
          <div>
            <RestaurantTwoToneIcon />
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PostToolbar;
