import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import Link from "@material-ui/core/Link";
import axios from "axios";
import React, { useState, useEffect } from "react";
const CommentLike = (props) => {
  const [vote, setVote] = useState(props.vote);
  const [voteState, setVoteState] = useState(props.vote_state);
  // console.log("coment single", props.vote_state);
  const voteAdd = async () => {
    let id = props.id;
    const Url = `/comment/${id}`;
    console.log(vote);
    await axios({
      method: "PUT",
      url: Url,
      data: { vote: vote + 1, vote_state: true },
    })
      .then(async (res) => {
        // console.log("voteee", res.data.vote);
        await setVote(res.data.votes);
        await setVoteState(res.data.vote_state);
      })
      .then(() => {
        axios.get(`/comment/${props.post_id}/favComment`).then((res) => {
          console.log("comment data", res.data);
          props.setTrendingComment(res.data)
        });
      });
  };
  const voteDelete = async () => {
    let id = props.id;
    const Url = `/comment/${id}`;
    await axios({
      method: "PUT",
      url: Url,
      data: { vote: vote - 1, vote_state: false },
    }).then(async (res) => {
      console.log("voteee", props.post_id);
      if (res.data.votes >= 0) {
        await setVote(res.data.votes);
        await setVoteState(res.data.vote_state);
        axios.get(`/comment/${props.post_id}/favComment`).then((res) => {
          console.log("comment data", res.data);
        });
      }
    });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
      <div>{vote}</div>
      {voteState === true ? (
        <div>
          <Link onClick={voteDelete}>
            <ThumbDownAltOutlinedIcon color="secondary" fontSize="small" />
          </Link>
        </div>
      ) : (
        <div>
          <Link onClick={voteAdd}>
            <ThumbUpAltOutlinedIcon fontSize="small" color="primary" />
          </Link>
        </div>
      )}
    </div>
  );
};
export default CommentLike;
