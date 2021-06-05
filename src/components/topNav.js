import Logo from "./topNav_props/logo";
import  "./topNav.scss"
import Search from "./topNav_props/search";
import UserInfo from "./topNav_props/userInfo";

const TopNav = () => {
  return (
    <div className="nav">
      <Logo />
      <Search/>
      <UserInfo/>
    </div>
  );
};

export default TopNav;
