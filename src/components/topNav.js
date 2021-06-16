import Logo from "./topNav_props/logo";
import "./topNav.scss";
import Search from "./searchNew/search";
import UserInfo from "./topNav_props/userInfo";
import TransitionsModal from "../components/toggle";
import { RichUtils } from "draft-js";

const TopNav = (props) => {
	return (
		<div className='nav'style ={ { backgroundImage: "url('backNav.jpg')" } }>
			
			<div>
				<Logo />
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<div style={{ paddingRight: "1em" }}>
					<TransitionsModal />
				</div>
				<div>
					<UserInfo />
				</div>
			</div>
		</div>
	);
};

export default TopNav;
