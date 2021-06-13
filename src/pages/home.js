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

	useEffect(() => {
		axios.get("/post").then((res) => {
			setPostData([...res.data]);
		});
	}, []);

	return (
		<div className='App'>
			<TopNav history={props.history} />
			<div className='appBody'>
				<div className='postDialog'>
					<PostDialog
						setPostData={setPostData}
						markdown={markdown}
						setMarkdown={setMarkdown}
					/>
				</div>
				<div className='filterToolBar'>
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
			//{" "}
		</div>
	);
}
