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
  const [markdown, setMarkdown] = useState("sup");
  const [commentMarkdown, setCommentMarkdown] = useState("");
  const [trendingComment, setTrendingComment] = useState(false);

  useEffect(() => {
    axios
      .get("/post")
      .then((res) => {
        // console.log(res.data);
        setPostData([...res.data]);
        // setTrendingComment([...res.data]);
      })
      .then(() => {
        // console.log("postData",postData[0]["id"])
        let id = postData[0];
        console.log(id);
        axios.get(`comment/${Number(id)}/favComment`).then((res) => {
          console.log("data", res.data);
        });
      });
  }, [trendingComment]);

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
          trendingComment={trendingComment}
          setTrendingComment={setTrendingComment}
        />
      </div>
    </div>
  );
}

// const [postData, setPostData] = useState([]);
// 	const [commentData, setCommentData] = useState([]);
// 	const [markdown, setMarkdown] = useState("sup");
// 	const [commentMarkdown, setCommentMarkdown] = useState("");

// 	useEffect(() => {
// 		axios.get("/post").then((res) => {
// 			setPostData([...res.data]);
// 		});
// 	}, []);

// 	return (
// 		<div className='App'>
// 			<TopNav history={props.history} />
// 			<div className='appBody'>
// 				<div className='postDialog'>
// 					<PostDialog
// 						setPostData={setPostData}
// 						markdown={markdown}
// 						setMarkdown={setMarkdown}
// 					/>
// 				</div>
// 				<div className='filterToolBar'>
// 					<FilterToolBar setPostData={setPostData} />
// 				</div>

// 				<PostContainer
// 					postData={postData}
// 					commentData={commentData}
// 					setCommentData={setCommentData}
// 					commentMarkdown={commentMarkdown}
// 					setCommentMarkdown={setCommentMarkdown}
// 				/>
// 			</div>
// 			//{" "}
// 		</div>
