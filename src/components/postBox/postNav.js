import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UserInfo from "../topNav_props/userInfo";
import Button from "@material-ui/core/Button";


const PostNav = (props) => {
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
            paddingTop:"1em",
            top:"0",
            justifyContent: "space-between" ,
            // backgroundColor: "rgb(0,0,0,0)",
            
          }}
        >
          <UserInfo userInfo ={props.userInfo}/>
         <Button size="small" variant="contained" color="primary" onClick={e => console.log("hey")}>
        Follow
      </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PostNav;
