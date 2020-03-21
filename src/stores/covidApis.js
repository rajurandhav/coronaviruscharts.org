import { observable, action } from 'mobx'

export class coronaTracker {
    constructor() {}
    @observable counter = 0
    @action
    incrementCount = () => {
        this.counter = this.counter + 1
    }
    @action
    decrementCount = () => {
        this.counter = this.counter - 1
    }
}