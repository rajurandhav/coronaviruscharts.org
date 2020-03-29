import React from 'react'
import { observer } from 'mobx-react'
import {
    Link
  } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export const HeaderNav = observer(() => {
    return(<div className='root'>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <div style={{ display: 'flex', justifyContent:'space-between', flex: 1}}>
            <Typography variant="h5">
                <Link to="/">coronaviruschart.live</Link>
            </Typography>
            <Link to="/about">About</Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>)
})