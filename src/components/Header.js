import React from 'react';
import { AppBar, Collapse, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import './Header.css';

const Header = () => {
  return (
    <div className="App">
      <AppBar style={{ background: 'transparent', boxShadow: 'none', fontFamily: 'nunito'}}>
        <Toolbar className='appbarWrapper'>
        <h1 className="appbarTitle">My<span className="colorText">Island.</span></h1>
        <IconButton>
            <SortIcon className='icon'/>
        </IconButton>
        </Toolbar>
      </AppBar>

      <div>
        <h1>Welcome To <br/> My <span className="colorText">Island</span></h1>
      </div>

    </div>
  )
}

export default Header
