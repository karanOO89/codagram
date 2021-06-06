import React from "react-dom";
//import SearchResult from "../SearchResult";
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
import "./singleSearch.scss"
import "../dialogPost/postEditor";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Background from "./background";
import Follow from "./follow";
import UserInfo from "../topNav_props/userInfo";
import { CenterFocusStrong } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";

const SingleSearch = () => {
  return (
   <div> 
     <div>
      <Background />
    </div>
    <div>
      <CssBaseline />
      <Container maxWidth="sm"
        style={{ 
          backgroundColor: '#cfe8fc',
          width: '50vw',
          height: '20vh',
         }}>
        <Typography component="div">
         <div class="searchBody">
           <div >
           <div class="username">
            <article>
              {/* <div>logo</div> */}
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div class ="user_text">username</div>
            </article>
          </div>
           </div>
           <div>
             <Follow />
           </div>
         </div>
        </Typography>
      </Container>
    </div>
    
    </div>
    )
};
export default SingleSearch;
