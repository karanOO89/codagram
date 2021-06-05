import "./App.scss";

// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PostDialog from "./components/dialog_post"
function App(props) {
  return (
    <div className="App">
      <PostDialog />
      {/* <Router>
        <Link to="/postEditor" >Add a post</Link>
        <Route path="/postEditor" component={PostEditor}></Route>
      </Router> */}
      
    </div>
  );
}

export default App;
