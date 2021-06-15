import { React, useState, useEffect } from "react";
import "./home.scss";
import PostDialog from "../components/postDialog";
import TopNav from "../components/topNav";
import axios from "axios";
import PostContainer from "../components/postsView/postContainer";
import FilterToolBar from "../components/filter/filterToolBar";
export default function Home(props) {
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [markdown, setMarkdown] = useState("type here...");
  const [commentMarkdown, setCommentMarkdown] = useState("");
  //[{id:"",favComment:""}]

  useEffect(() => {
    axios.get("/post").then((res) => {
      // console.log("1111111111111111",res.data)
      setPostData([...res.data]);
      // setTrendingComment()

      
    });
  }, []);

  return (
    <div className="App">
      <TopNav history={props.history} />

      <div className="appBody">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "57em",
          }}
        >
          <div className="postDialog">
            <PostDialog
              setPostData={setPostData}
              markdown={markdown}
              setMarkdown={setMarkdown}
            />
          </div>
          <FilterToolBar setPostData={setPostData} />
        </div>
        <PostContainer
          postData={postData}
          commentData={commentData}
          setCommentData={setCommentData}
          commentMarkdown={commentMarkdown}
          setCommentMarkdown={setCommentMarkdown}
          
        />
      </div>
    </div>
  );
}

