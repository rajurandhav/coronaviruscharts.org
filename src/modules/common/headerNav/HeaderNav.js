import React from 'react'
import { observer } from 'mobx-react'
import {
  Link
} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './headerNav.css'

export const HeaderNav = observer(() => {
  return (<div className='root'>
    <AppBar position="static">
      <Toolbar classes={{
        root: 'root'
      }}>
        <IconButton edge="start" className='menuButton' color="black" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          <Typography variant="h5">
            <Link className="logo" to="/">
              <span className="cause">coronavirus</span>
              <span className="appliation">chart</span>
              <span className="seperator">.</span>
              <span className="mode">live</span>
            </Link>
          </Typography>
          <Link className="lang" to="/">
            English
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  </div>)
})