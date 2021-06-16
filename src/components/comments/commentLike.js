import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Link from "@material-ui/core/Link";
import axios from "axios";
import React, { useState, useEffect } from "react";
const CommentLike = (props) => {
  const [vote, setVote] = useState(props.vote);
  const [voteState, setVoteState] = useState(props.vote_state);
  // console.log("coment single", props.vote_state);
  console.log("props trending comment ", props.comment);

  const voteAdd = () => {
    setVoteState(true)
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
      })
      .then((res) => {
        axios.put(`/post/${props.post_id}/favComment`).then((res) => {
          // console.log(res.data);
          props.setTrendingComment(res.data);
        });
      });
  };

  const voteDelete = async () => {
    setVoteState(false)
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
      })
      .then((res) => {
        axios.put(`/post/${props.post_id}/favComment`).then((res) => {
          console.log("resposne",res.data);
          props.setTrendingComment(res.data);
        });
      });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label style={{ fontStyle: "italic" ,opacity:".7",color:"white"}}>Votes</label>
      <div style={{color:"white",opacity:".7"}}>{vote}</div>
      <div>
        {voteState === true ? (
          <div >
            <Link onClick={voteDelete}>
              <ThumbDownAltIcon style={{color:"red",opacity:".5"}}fontSize="small" />
            </Link>
          </div>
        ) : (
          <div >
            <Link onClick={voteAdd}>
              <ThumbUpAltIcon style={{color:"green",opacity:".5"}}fontSize="small" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentLike;
