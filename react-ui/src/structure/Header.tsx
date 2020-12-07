import React from 'react';
import {Button, AppBar, Toolbar, IconButton, Typography, Container} from '@material-ui/core';


interface Props {
  
}

export const Header: React.FC = () => {
  return (
   
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <div className="fullName">Essa Shomali</div>
            <div className="indTitle">Software Engineer</div>
          </Typography>
        </Toolbar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu"><div className="resume">Resume</div></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
