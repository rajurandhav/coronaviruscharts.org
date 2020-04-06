import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useStore } from "../../../contexts";
import { observer } from "mobx-react";
import { MenuList } from "../components";

export const SwipeableTemporaryDrawer = observer(() => {
  const {
    drawerState: { open, toggleDrawer }
  } = useStore();
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <MenuList></MenuList>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
});
