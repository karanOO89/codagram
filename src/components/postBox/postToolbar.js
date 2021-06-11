import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
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
      setStatus(res.data.favourite);
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
  };

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
   
      
          <div className="tool">
            <div className="toolUpper">
              <div className={status ? "favTrue" : "favFalse"}>
                <Link
                  color="inherit"
                  onClick={status ? favDelete : favInsert}
                >
                  <FavoriteTwoToneIcon  />
                </Link>
              </div>
            
            </div>
            <div>
              <Link color="inherit" onClick={forkPost}>
                <RestaurantTwoToneIcon  />
              </Link>
            </div>
          </div>
       
  );
};

export default PostToolbar;
