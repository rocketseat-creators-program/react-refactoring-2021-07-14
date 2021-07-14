import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useSelectForm} from '../../hooks/SelectForm'

export default function MenuBar({children}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {select} = useSelectForm()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectClose = (option) => {
    select(option);
    setAnchorEl(null);
  };

  return (
    <div>
        <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
        >
            {children}
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleSelectClose}
        >
            <MenuItem onClick={() => handleSelectClose('content')}>Content Record</MenuItem>
            <MenuItem onClick={() => handleSelectClose('refactored')}>Refactored Form</MenuItem>
            <MenuItem onClick={() => handleSelectClose('unrefactored')}>Unrefactored Form</MenuItem>
        </Menu>
    </div>
  );
}