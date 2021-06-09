import { React, useState, useEffect } from "react";
import "./App.scss";
//import { Editor } from "draft-js";
//import TextEditor from "./components/TextEditor";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PostDialog from "./components/postDialog";
import TopNav from "./components/topNav";
import PostBox from "./components/postBox";
//import PostDialog from "./components/dialog_post"
//import TopNav from "./components/topNav";
//import PostBox from "./components/postBox";
//import MarkDownDemo from "./markdownDemo";
import SearchResult from "./components/SearchResult";

export default function App() {


    

   return (
    <div className="App">
      <TopNav />
      <div className="appBody">
        <div className="postDialog">
          {/* {!data ? "Loading..." : data} */}
          <PostDialog  />
        </div>
        <div>
          <PostBox />

        </div>
        <div className="searchResult">{/* <SearchResult /> */}</div>
      </div>

     
    </div>
  );
}
