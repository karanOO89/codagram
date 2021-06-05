import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UserInfo from "../topNav_props/userInfo";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';


const PostNav = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{
            display: "flex",
            flexDirection:"row",
            alignItems: "center",
            padding:"1em",
            justifyContent: "space-between" ,
            // backgroundColor: "rgb(0,0,0,0)",
            height: "3em",
          }}
        >
          <UserInfo/>
         <Button size="small" variant="outlined" color="primary" >
        follow<AddCircleOutlineOutlinedIcon/>
      </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PostNav;
