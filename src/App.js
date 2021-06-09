import { React, useState, useEffect } from "react";
import "./App.scss";
//import { Editor } from "draft-js";
//import TextEditor from "./components/TextEditor";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PostDialog from "./components/postDialog";
import TopNav from "./components/topNav";
import PostBox from "./components/postBox";
import SearchResult from "./components/SearchResult";
import PostContainer from "./components/postContainer";
import axios from "axios";

export default function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get("/post").then((res) => {
      setPostData([...res.data]);
    });
  }, []);

  // console.log("postdata", postData);

  return (
    <div className="App">
      <TopNav />
      <div className="appBody">
        <div className="postDialog">
          {/* {!data ? "Loading..." : data} */}
          <PostDialog setPostData={setPostData} />
        </div>
        <div>
          <PostContainer postData={postData} />
        </div>
        <div className="searchResult">{/* <SearchResult /> */}</div>
      </div>
    </div>
  );
}
