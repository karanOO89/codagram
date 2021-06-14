import Home from "./pages/home";
import Search from "./pages/searchPage";
import ChatApp from "./components/chatApp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function App(props) {
	let history = useHistory("/");

	return (
		<div>
			<nav></nav>

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
						<Route path='/search' component={Search} />
						{/* <Route  component={TopNav} history={history} /> */}
						<Route path='/' component={Home} history={history} />
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
}
