import React, { useEffect, useState } from 'react';
import { AppBar, Collapse, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import './Header.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, [])
  return (
    <div className="root" id="header">
      <AppBar style={{ background: 'transparent', boxShadow: 'none', fontFamily: 'nunito' }}>
        <Toolbar className='appbarWrapper'>
          <h1 className="appbarTitle">Ryan<span className="colorText">Cornelio</span>.</h1>
          <IconButton>
            <SortIcon className='icon' />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <div className="container">
          <h1 className="title">Welcome To <br /> My <span className="colorText">Page</span>.
        </h1>
          <IconButton>
            <KeyboardArrowDownIcon style={{ fontSize: '3em'}} className="goDown"/>
          </IconButton>
        </div>
      </Collapse>
    </div>
  )
}

export default Header
