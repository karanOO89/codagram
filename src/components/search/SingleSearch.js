import React from "react-dom";
import "../dialogPost/postEditor";
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
          }}>
        <Typography 
          component="div" 
        />
     
      </Container>
    </div>
    )
};
export default SingleSearch;
