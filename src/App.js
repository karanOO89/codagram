<<<<<<< HEAD
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
=======
import Home from "./pages/home";
import Search from "./pages/searchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TopNav from "./components/topNav";

export default function App(props) {
  let history = useHistory("/");

  return (
    <div>
      <nav>
>>>>>>> 4d9021d15c861df813f2ccd34dd4543e0569a3ac

	useEffect(() => {
		axios.get("/post").then((res) => {
			console.log(res.data);
			setPostData([...res.data]);
		});
	}, []);

<<<<<<< HEAD
	return (
		<div className='App'>
			<TopNav />
			<div className='appBody'>
				<div className='postDialog'>
					{/* {!data ? "Loading..." : data} */}
					<PostDialog
						setPostData={setPostData}
						markdown={markdown}
						setMarkdown={setMarkdown}
					/>
				</div>
				<div>
					<PostContainer
						postData={postData}
						commentData={commentData}
						setCommentData={setCommentData}
						commentMarkdown={commentMarkdown}
						setCommentMarkdown={setCommentMarkdown}
					/>
				</div>
				<div className='searchResult'>{/* <SearchResult /> */}</div>
			</div>
		</div>
	);
=======
      </nav>

      <Router>
        <div>
          {/* <nav> */}
          {/* <ul> */}
          {/* <li> */}
          {/* <Link to="/search">Search</Link> */}
          {/* </li> */}
          {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> */}
          {/* </ul> */}
          {/* </nav> */}
          <Switch>

            <Route path="/search" component={Search} />
            {/* <Route  component={TopNav} history={history} /> */}
            <Route path="/" component={Home} history={history} />
            {/* <Route path="/shop" component={Shop} /> */}
          </Switch>
          {/* <Switch>
       
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/">
            <Home  history={history}/>
          </Route>
        </Switch> */}
        </div>
      </Router>
    </div>
  );
>>>>>>> 4d9021d15c861df813f2ccd34dd4543e0569a3ac
}
