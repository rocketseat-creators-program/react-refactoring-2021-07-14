import React from 'react';
import {useStyles} from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBar from '../MenuBar';

function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar variant="dense" className={classes.toolbar}>
          <MenuBar>
            <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu">
                <MenuIcon />
            </IconButton>
          </MenuBar>
          <Typography variant="h6" color="inherit">
            React Refactoring
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export {DenseAppBar as AppBar}