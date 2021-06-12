import Logo from "./topNav_props/logo";
import "./topNav.scss";
import Search from "./topNav_props/search";
import UserInfo from "./topNav_props/userInfo";
import TransitionsModal from "../components/toggle";

const TopNav = () => {
	return (
		<div className='nav'>
			<Logo />
			<Search />
			<TransitionsModal />
			<UserInfo />
		</div>
	);
};

export default TopNav;
