import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

const Footer = () => {
  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

  return (
    <React.Fragment>
      <AppBar position='sticky' color='primary' sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <StyledFab color='secondary' aria-label='add'>
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color='inherit'>
            <SearchIcon />
          </IconButton>
          <IconButton color='inherit'>
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Footer;

