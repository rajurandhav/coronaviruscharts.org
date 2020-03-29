import axios from 'axios';
import { observable, action } from 'mobx'

export class CoronaTracker {
    @observable indiaCount = null
    @observable counter = 0

    @action
    getIndiaCount  = async () => {
        const { data } = await axios.get("https://api.rootnet.in/covid19-in/stats/latest")
        this.indiaCount = data.data
    }
    @action
    incrementCount = () => {
        this.counter = this.counter + 1
    }
    @action
    decrementCount = () => {
        this.counter = this.counter - 1
    }
}