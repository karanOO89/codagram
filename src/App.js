import { React, useState, useEffect } from "react";
import "./App.scss";
//import { Editor } from "draft-js";
//import TextEditor from "./components/TextEditor";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PostDialog from "./components/postDialog";
import TopNav from "./components/topNav";
import SearchResult from "./components/SearchResult";
import axios from "axios";
import PostContainer from "./components/postsView/postContainer";
export default function App(props) {
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [markdown, setMarkdown] = useState("sup");
  const [commentMarkdown, setCommentMarkdown] = useState("");

  useEffect(() => {
    axios.get("/post").then((res) => {
      console.log(res.data);
      setPostData([...res.data]);
    });
  }, []);


  return (
    <div className="App">
      <TopNav />
      <div className="appBody">
        <div className="postDialog">
          {/* {!data ? "Loading..." : data} */}
          <PostDialog
            setPostData={setPostData}
            markdown={markdown}
            setMarkdown={setMarkdown}
          />
        </div>
        <div className="postContainer">
          <PostContainer
            postData={postData}
            commentData={commentData}
            setCommentData={setCommentData}
            commentMarkdown={commentMarkdown}
            setCommentMarkdown={setCommentMarkdown}
          />
        </div>
        <div className="searchResult">{/* <SearchResult /> */}</div>
      </div>
    </div>
  );
}
