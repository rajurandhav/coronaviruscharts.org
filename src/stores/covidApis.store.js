import axios from 'axios';
import { observable, action } from 'mobx'
import { AppConfig } from '../modules'
import * as topojson from "topojson-client";

export class CoronaTracker {
    @observable stateWiseCount = null
    @observable districtWiseCount = null
    @observable geoData = null

    @action getStateWiseCount = async () => {
        const { data } = await axios.get(`${AppConfig.apiBaseUrl}/data.json`)
        this.stateWiseCount = data.statewise
    }

    @action getDistrictWiseCount = async () => {
        const { data } = await axios.get(`${AppConfig.apiBaseUrl}/state_district_wise.json`)
        this.districtWiseData = data
    }

    @action getTopoDataForRegion = async (viewObject) => {
        const { data } = await axios.get(viewObject.geoDataFile)
        this.geoData = data
        // if (data) {
        //     this.geoData = topojson.feature(data, data.objects[viewObject.graphObjectName])
        // } else {
        //     this.geoData = null
        // }

    }
}