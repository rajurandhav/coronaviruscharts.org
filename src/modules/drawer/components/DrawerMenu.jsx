import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useStore } from "../../../contexts";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import './Menu.css'

const useStyles = makeStyles({
  list: {
    width: 450,
    height: "100%",
    backgroundColor: "#F0F0F0",
    paddingTop: 10,
  },
});

export const MenuList = observer(() => {
  const classes = useStyles();
  const {
    drawerState: { toggleDrawer },
  } = useStore();
  return (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Help lines"].map((text, index) => (
          <Link to="/helpline">
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <List>
        {["Data Source", "About Us", "Join Us"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );
});
