import React, {useState} from 'react'
import { useStore } from "../../contexts";
import { observer } from 'mobx-react'
import {
  Link
} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Select, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './headerNav.css'

export const HeaderNav = observer(() => {
  const {
    drawerState: { toggleDrawer },
    utilStore:{
      setLanguage
    }
  } = useStore();
  const [lang, handleChangelLang,] = useState('en')
  const changeLang = (lang) => {
    handleChangelLang(lang);
    setLanguage(lang)
  }

  return (<div className='root'>
    <AppBar position="static">
      <Toolbar classes={{
        root: 'root'
      }}>
        <IconButton edge="start" className='menuButton' color="black" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          <Typography variant="h5">
            <Link className="logo" to="/">
              <span className="cause">coronavirus</span>
              <span className="appliation">charts</span>
              <span className="seperator">.</span>
              <span className="mode">org</span>
            </Link>
          </Typography>
          <div className="lang">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              onChange={e=>changeLang(e.target.value)}
              disableUnderline
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="mar">मराठी</MenuItem>
            </Select>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </div>)
})