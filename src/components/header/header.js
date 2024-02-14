import React from "react";
import "./header.scss";

import { NavLink } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize/useScreenSize";

import { If, Then, Else } from "react-if"

// Material UI
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const screenSize = useScreenSize();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const subOpen = Boolean(anchorEl2)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const subHandleClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const subHandleClose = () => {
    setAnchorEl2(null);
  };

  
  const ITEM_HEIGHT = 48;
  return (
    <header>
      <h1 className="hd-title">THE WOODSMAN CAFE</h1>
      <If condition={screenSize.width > 1024}>
        <Then>
          <nav className="menu-area">
            <ul>
              <li><NavLink className="hd-links" to='/'>Home</NavLink></li>
              <li><NavLink className="hd-links" to='/main-menu'>Menu</NavLink>
                <ul className="dropdown">
                  <li><NavLink className="subMenu" to='/kids-menu'>Kids Menu</NavLink></li>
                  <li><NavLink className="subMenu" to='/breakfast-menu'>Breakfast Menu</NavLink></li>
                  <li><NavLink className="subMenu" to='/main-menu'>Main Menu</NavLink></li>
                  <li><NavLink className="subMenu" to='/dinner-menu'>Dinner Menu</NavLink></li>
                </ul>
              </li>
            </ul>
          </nav>
        </Then>
        <Else>
          <IconButton
            aria-label="more"
            color="inherit"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon  fontSize="large" />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink className="hd-links" to='/'>Home</NavLink>
            </MenuItem>
            <MenuItem onClick={subHandleClick}
              aria-controls={subOpen ? 'sub-menu' : undefined}
              aria-expanded={subOpen ? 'true' : undefined}
              aria-haspopup="true"

            >
              <p className="hd-links" >Menu</p>
            </MenuItem>
            <Menu
              id="sub-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl2}
              open={subOpen}
              onClose={subHandleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
                <MenuItem key='kids-menu' onClick={subHandleClose}>
                  <NavLink className="subMenu" to='/kids-menu'>Kids Menu</NavLink>
                </MenuItem>
                <MenuItem onClick={subHandleClose}>
                  <NavLink className="subMenu" to='/breakfast-menu'>Breakfast Menu</NavLink>
                </MenuItem>
                <MenuItem onClick={subHandleClose}>
                  <NavLink className="subMenu" to='/main-menu'>Main Menu</NavLink>
                </MenuItem>
                <MenuItem onClick={subHandleClose}>
                  <NavLink className="subMenu" to='/dinner-menu'>Dinner Menu</NavLink>
                </MenuItem>
              </Menu>
          </Menu>
        </Else>
      </If>
    </header>
  );
}
