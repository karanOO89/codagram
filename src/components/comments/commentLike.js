import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import Link from "@material-ui/core/Link";
import axios from "axios";
import React, { useState, useEffect } from "react";
const CommentLike = (props) => {
  const [vote, setVote] = useState(props.vote);
  const [voteState, setVoteState] = useState(props.vote_state);
  // console.log("coment single", props.vote_state);
  console.log("props trending comment ", props.comment);

  const voteAdd = () => {
    let id = props.id;
    const Url = `/comment/${id}`;
    console.log(vote);
    axios({
      method: "PUT",
      url: Url,
      data: { vote: vote + 1, vote_state: true },
    })
      .then((res) => {
        // console.log("voteee", res.data.vote);
        setVote(res.data.votes);
        setVoteState(res.data.vote_state);
      }).then((res) => {
        axios.put(`/post/${props.post_id}/favComment`).then((res) => {
          console.log(res.data);
          props.setTrendingComment(res.data);
        });
      });
  };

  const voteDelete = async () => {
    let id = props.id;
    let user_id = props.user_id;
    const Url = `/comment/${id}`;

    await axios({
      method: "PUT",
      url: Url,
      data: { vote: vote - 1, vote_state: false },
    })
      .then((res) => {
        console.log("voteee", props.post_id);
        if (res.data.votes >= 0) {
          setVote(res.data.votes);
          setVoteState(res.data.vote_state);
        }
      }).then((res) => {
        axios.put(`/post/${props.post_id}/favComment`).then((res) => {
          console.log(res.data);
          props.setTrendingComment(res.data);

        });
      });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label style={{ fontStyle: "italic" }}>Votes</label>
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
