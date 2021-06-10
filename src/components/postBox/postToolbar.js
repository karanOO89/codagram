import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import BookTwoToneIcon from "@material-ui/icons/BookTwoTone";
import RestaurantTwoToneIcon from "@material-ui/icons/RestaurantTwoTone";
import Link from "@material-ui/core/Link";
import axios from "axios";
import "./postToolbar.scss";

import PostComment from "./postComment";

const PostToolbar = (props) => {

  const [status, setStatus] = useState();
  // console.log("status", status);

  useEffect(() => {
    const post_id = props.id;
    // const Url = ;
    axios.get(`/post/${post_id}/fav`).then((res) => {
      // console.log("fav fetched again", res.data.favourite);
      setStatus(res.data.favourite)
    });
  }, []);
  const forkPost = () => {
    const post_id = props.id;
     axios({
      method: "GET",
      url: `/post`,
      data: { status: true },
    }).then(() => {
      setStatus(true);
      // console.log("fav fetched");
    });
  }

  const favInsert = () => {
    const post_id = props.id;
    axios({
      method: "PUT",
      url: `/post/${post_id}/fav`,
      data: { status: true },
    }).then(() => {
      setStatus(true);
      // console.log("fav fetched");
    });
  };

  const favDelete = () => {
    const post_id = props.id;
    axios({
      method: "PUT",
      url: `/post/${post_id}/fav`,
      data: { status: false },
    }).then(() => {
      setStatus(false);
      // console.log("fav fetched");
    });
  };

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
                <div className={status ? "favTrue" : "favFalse"}>
                  <Link
                    size="small"
                    color="inherit"
                    onClick={status ? favDelete :  favInsert}
                  >
                    <FavoriteTwoToneIcon fontSize="small" />
                  </Link>
                </div>

                <Link
                  size="small"
                  color="inherit"
                  onClick={(e) => console.log("hey")}
                >
                  <ShareTwoToneIcon fontSize="small" />
                </Link>
                {/* <Link
                  size="small"
                  color="inherit"
                  onClick={(e) => console.log("hey")}
                >
                  <BookTwoToneIcon fontSize="small" />
                </Link> */}
              </div>
              <div>
                <Link
                  size="small"
                  color="inherit"
                  onClick={forkPost}
                >
                  <RestaurantTwoToneIcon fontSize="small" />
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PostToolbar;
