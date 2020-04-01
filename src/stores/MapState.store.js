import { observable, action, computed } from 'mobx'
import { mapMeta } from '../modules/common/constants'

export class MapState {
    view = 'state'
    @observable regionName = 'India'

    @action setView = (regionName) => {
        this.view = 'district'
        this.regionName = regionName
    }

    @computed get viewObject() {
        const obj = mapMeta[this.regionName]
        return obj
    }
}