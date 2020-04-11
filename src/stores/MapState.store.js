import { observable, action, computed, toJS } from 'mobx'
import { mapMeta } from '../modules/common/constants'

export class MapState {
    view = 'country'
    district = ''
    @observable geoRegion = 'India'
    @observable regionData = []

    @action setCountryView = () => {
        this.view = 'country'
        this.geoRegion = 'India'
        this.regionData = []
    }

    @action setStateView = (regionData, regionName) => {
        this.view = 'state'
        this.geoRegion = regionName
        this.regionData.push(regionData)
        // console.log(toJS(this.regionData))
        this.regionData = [...this.regionData]
    }

    @action setDistrictView = (regionData, regionName) => {
        this.district = regionName
        this.regionData[1] = regionData
        this.regionData = [...this.regionData]
    }

    @computed get viewObject() {
        const obj = mapMeta[this.geoRegion]
        return obj
    }
}