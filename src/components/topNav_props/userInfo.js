import "./userInfo.scss";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
const UserInfo = (props) => {
  const classes = useStyles();
  return (
    <div class="userinfo">
      <article>
        <Link size="small" color="inherit" onClick={(e) => console.log("hey")}>
          <Avatar alt="Remy Sharp"/>

        </Link>
        <Link size="small" color="inherit" onClick={(e) => console.log("hey")}>

          <div class="user_text">{props.userInfo}</div>
        </Link>

      </article>
    </div>
  );
};

export default UserInfo;
