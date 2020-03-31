import { observable, action, computed } from 'mobx'
import { mapMeta } from '../modules/common/constants'

export class MapState {
    @observable viewKey = mapMeta['India'].name

    @action setView = (view) => {
        this.viewKey = view
    }

    @computed get viewObject() {
        return mapMeta[this.viewKey]
    }
}