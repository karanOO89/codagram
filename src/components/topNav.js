import Logo from "./topNav_props/logo";
import "./topNav.scss";
import Search from "./searchNew/search";
import UserInfo from "./topNav_props/userInfo";
import TransitionsModal from "../components/toggle";

const TopNav = (props) => {
	return (
		<div className='nav'>
			<Logo />
			<TransitionsModal />
			{/* <Search history={props.history}/> */}
			<UserInfo />
		</div>
	);
};

export default TopNav;
