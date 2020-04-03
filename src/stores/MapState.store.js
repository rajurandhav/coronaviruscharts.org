import { observable, action, computed, toJS } from 'mobx'
import { mapMeta } from '../modules/common/constants'

export class MapState {
    @observable view = 'country'
    @observable geoDataKey = 'st_nm'
    @observable geoRegion = 'India'
    @observable district = ''
    @observable regionData = []

    @action setCountryView = () => {
        this.view = 'country'
        this.geoDataKey = 'st_nm'
        this.geoRegion = 'India'
        this.regionData = []
    }

    @action setStateView = (regionData, regionName) => {
        this.view = 'state'
        this.geoDataKey = 'district'
        this.geoRegion = regionName
        this.regionData.push(regionData)
        this.regionData = [...this.regionData]
    }

    @action setDistrictView = (regionData, regionName) => {
        this.view = 'district'
        this.district = regionName
        this.regionData[1] = regionData
        this.regionData = [...this.regionData]
    }

    @computed get viewObject() {
        const obj = mapMeta[this.geoRegion]
        return obj
    }
}