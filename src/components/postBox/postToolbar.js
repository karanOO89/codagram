import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

import Button from "@material-ui/core/Button";
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
  const visitLink = () => {
    const code = encodeURIComponent(props.redirect_code.slice(5, -3));
    console.log(code);
    let url = `http://www.pythontutor.com/javascript.html#code=${code}&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D`;
    window.open(url, "_blank");
  };

  const style = {
    background: '#00a152',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 32,
    padding: '10px 10px',
    margin: 0,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };
  
  return (
    <div className="tool">
      <div className="toolUpper">
        <div className={status ? "favTrue" : "favFalse"}>
          <Link color="inherit" onClick={status ? favDelete : favInsert}>
            <FavoriteTwoToneIcon />
          </Link>
        </div>
      </div>
      <div>
        {props.code ? (
          <div>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={visitLink}
              style={style}
            >
              pythonTutor
            </Button>
          </div>
        ) : null}
      </div>
      {/* <div>
        <Link color="inherit" onClick={forkPost}>
          <RestaurantTwoToneIcon />
        </Link>
      </div> */}
    </div>
  );
};

export default PostToolbar;
