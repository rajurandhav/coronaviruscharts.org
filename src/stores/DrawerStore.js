import { observable, action } from 'mobx'

export class DrawerState {
    @observable open = false

    @action toggleDrawer = (open) => event => {
        
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        this.open = open
    }
}