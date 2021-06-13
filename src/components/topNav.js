import Logo from "./topNav_props/logo";
import "./topNav.scss";

import "./topNav.scss";

import UserInfo from "./topNav_props/userInfo";
import TransitionsModal from "../components/toggle";

const TopNav = (props) => {
	return (
		<div className='nav'>
			<Logo />

			<TransitionsModal />
			<UserInfo />
		</div>
	);
};

export default TopNav;
