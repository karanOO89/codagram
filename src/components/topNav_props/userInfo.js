import "./userInfo.scss";
import Avatar from "@material-ui/core/Avatar";
const UserInfo = () => {
  return (
    <div class="userinfo">
      <article>
        {/* <div>logo</div> */}
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div class ="user_text">username</div>
      </article>
    </div>
  );
};

export default UserInfo;
