import "./App.scss";
//import { Editor } from "draft-js";
//import TextEditor from "./components/TextEditor";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import PostDialog from "./components/dialog_post"
//import TopNav from "./components/topNav";
//import PostBox from "./components/postBox";
//import MarkDownDemo from "./markdownDemo";
import SearchResult from "./components/SearchResult";

export default function App() {
  return (
    <div className="App">
      {/* <TopNav/> */}
      <div className="postDialog"> 
      {/* <PostDialog />
      <PostBox /> */}
      <SearchResult />
      </div>

      {/* <Router>
        <Link to="/postEditor" >Add a post</Link>
        <Route path="/postEditor" component={PostEditor}></Route>
      </Router> */}
      {/* <MarkDownDemo/> */}
    </div>
  );



}


