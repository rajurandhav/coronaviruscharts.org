import axios from 'axios';
import { observable, action } from 'mobx'
import { AppConfig } from '../modules'

export class CoronaTracker {
    @observable stateWiseCount = null
    @observable districtWiseCount = null
    @observable bedCounts = null
    @observable geoData = null

    @action getStateWiseCount = async () => {
        const { data } = await axios.get(`${AppConfig.apiBaseUrl}/data.json`)
        this.stateWiseCount = data.statewise.map(state => ({
            ...state,
            name: state.state,
            displayName: state.state
        }))
        // console.log(toJS(this.stateWiseCount))
    }

    @action getDistrictWiseCount = async () => {
        const { data } = await axios.get(`${AppConfig.apiBaseUrl}/state_district_wise.json`)
        const processedData = {}
        for (let key in data) {
            const sectionData = data[key] ? data[key].districtData : []
            processedData[key] = []
            for (let secKey in sectionData) {
                processedData[key].push({
                    name: secKey,
                    displayName: secKey,
                    ...sectionData[secKey]
                })
            }
        }
        this.districtWiseCount = processedData
        // console.log(toJS(this.districtWiseCount))
    }


    @action getBedCounts = async () => {
        const { data } = await axios.get(`${AppConfig.apiRootBaseUrl}/stats/hospitals`)
        // console.log(data.data.regional)
        this.bedCounts = data?.data?.regional??[]
    }

    @action getTopoDataForRegion = async (viewObject) => {
        const { data } = await axios.get(viewObject.geoDataFile)
        this.geoData = data
        // console.log(toJS(this.geoData))
    }
}