import React from "react-dom";
//import SearchResult from "../SearchResult";
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
import UserInfo from '../topNav_props/userInfo'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const SingleSearch = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm"
        style={{ 
          backgroundColor: '#cfe8fc',
          width: '50vw',
          height: '50vh',
          borderRadius: 5,
          margin: '15px' 
          }}
      >
        
        <Typography 
          component="div" 
           />
        <UserInfo />
      </Container>
    </div>
    )
};
export default SingleSearch;
