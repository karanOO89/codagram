import React from "react";
import UserInfo from "../topNav_props/userInfo";
import Button from "@material-ui/core/Button";
import "./postNav.scss";

const PostNav = (props) => {
	return (
		<div className='postNav'>
			<div>
				<UserInfo userInfo={props.userInfo} />
			</div>
			{/* <div>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={(e) => console.log("hey")}
        >
          Follow
        </Button>
      </div> */}
		</div>
	);
};

export default PostNav;
