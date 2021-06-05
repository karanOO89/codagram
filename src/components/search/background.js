import React from "react-dom";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Background = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm"
        style={{ 
          backgroundColor: '#aaa',
          height: '15vh',
          padding: '0px',
          }}
      />
    </div>
    )
};
export default Background;

