import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import Link from "@material-ui/core/Link";
import axios from "axios";
import React, { useState, useEffect } from "react";
const CommentLike = (props) => {
  const [vote, setVote] = useState(props.vote);
  //   console.log("coment single", props.vote);
  const voteAdd = async() => {
      let id = props.id;
      const Url = `/comment/${id}`;
      console.log(vote)
    await axios({
      method: "PUT",
      url: Url,
      data: {vote:vote+1},
    }).then(async(res) => {
      await setVote(res.data)
    });
  };
  const voteDelete = async() => {
    let id = props.id;
    const Url = `/comment/${id}`;
    await axios({
      method: "PUT",
      url: Url,
      data: {vote:vote-1},
    }).then(async(res) => {
        if(res.data>=0)
        await setVote(res.data)
    });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <Link onClick={voteAdd}>
          <ThumbUpAltOutlinedIcon fontSize="small" color="primary" />
        </Link>
      </div>
      <div>{vote}</div>
      <div>
        <Link onClick={voteDelete}>
          <ThumbDownAltOutlinedIcon color="secondary" fontSize="small" />
        </Link>
      </div>
    </div>
  );
};
export default CommentLike;
