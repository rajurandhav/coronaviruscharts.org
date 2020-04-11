import { observable, action, computed, toJS } from 'mobx'
import axios from 'axios';
import _ from 'lodash'
import { AppConfig } from '../modules'

export class HelpLine {
    selectedData = null
    @observable helpLineData = []
    @observable helpLineFilter = [
        { key: "state", label: "State", onSelect: this.selectState, list: [], disable: false, value: '' },
        { key: "city", label: "Area", onSelect: this.selectArea, list: [], disable: true, value: '' }
    ]

    @action selectState = (e) => {
        const selectedState = e.target.value
        this.helpLineFilter = this.helpLineFilter.map(item => {
            switch (item.key) {
                case 'state':
                    return {
                        ...item,
                        value: selectedState
                    }
                case 'city':
                    return {
                        ...item,
                        value: '',
                        list: _.keys(this.helpLineData[selectedState])
                    }
                case 'type':
                    return {
                        ...item,
                        value: '',
                        list: []
                    }
            }
        })
    }

    @action selectArea = (e) => {
        const selectedArea = e.target.value
        const selectedState = this.helpLineFilter.find(item => item.key === 'state').value
        this.selectedData = this.helpLineData[selectedState][selectedArea]
        this.helpLineFilter = this.helpLineFilter.map(item => {
            switch (item.key) {
                case 'state':
                    return item
                case 'city':
                    return {
                        ...item,
                        value: selectedArea
                    }
                case 'type':
                    return {
                        ...item,
                        value: '',
                        list: _.keys(this.helpLineData[selectedState][selectedArea])
                    }
            }
        })
    }

    // @action selectType = (e) => {
    //     const selectedType = e.target.value
    //     const selectedState = this.helpLineFilter.find(item => item.key === 'state').value
    //     const selectedArea = this.helpLineFilter.find(item => item.key === 'city').value
    //     this.selectedData = this.helpLineData[selectedState][selectedArea][selectedType]
    //     console.log(toJS(this.selectedData))
    //     this.helpLineFilter = this.helpLineFilter.map(item => {
    //         switch (item.key) {
    //             case 'type':
    //                 return {
    //                     ...item,
    //                     value: selectedType,
    //                 }
    //             default:
    //                 return item
    //         }
    //     })
    // }

    @action getHelpLineData = async () => {
        const { data } = await axios.get(`${AppConfig.apiBaseUrl}/resources/resources.json`)
        this.helpLineData = data.resources.reduce((result, item) => {
            let state = result[item.state] = result[item.state] || {};
            let city = state[item.city] = state[item.city] || [];
            // let category = city[item.category] = city[item.category] || [];
            city.push(item);
            return result;
        }, {});

        const states = Object.keys(this.helpLineData)
        this.helpLineFilter = this.helpLineFilter.map(item => {
            if (item.key === 'state') {
                return {
                    ...item,
                    list: states
                }
            } else {
                return item
            }
        })
        // console.log(toJS(this.helpLineFilter))
        // console.log(toJS(this.helpLineData))
    }
}