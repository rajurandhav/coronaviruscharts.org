import { observable, action, computed } from 'mobx'
import { mapMeta } from '../modules/common/constants'

export class MapState {
    view = 'India'
    @observable regionName = 'India'

    @action setView = (regionName) => {
        this.view = 'state'
        this.regionName = regionName
    }

    @computed get viewObject() {
        const obj = mapMeta[this.regionName]
        return obj
    }
}