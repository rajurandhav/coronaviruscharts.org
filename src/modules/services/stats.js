import memoizeOne from "memoize-one";
import _ from 'lodash';
import { toJS } from 'mobx'

export const getProcessedStateStats = memoizeOne((stateWiseCount, bedCounts) => {
    if (_.isEmpty(stateWiseCount) || _.isEmpty(bedCounts)) return []
    const stateWiseData = []
    const statesLength = stateWiseCount.length
    for (let i = 0; i < statesLength; i++) {
        let selectedStatState = stateWiseCount[i]?.name ?? undefined
        if (selectedStatState) {
            let bedData = bedCounts.find(state => {
                if (selectedStatState === 'Total') {
                    return state.state === 'INDIA'
                } else {
                    return state.state === selectedStatState
                }
            })
            if (!_.isEmpty(bedData)) {
                stateWiseData.push({
                    ...toJS(stateWiseCount[i]),
                    ...bedData
                })
            } else {
                stateWiseData.push(toJS(stateWiseCount[i]))
            }
        }
    }

    // console.log(toJS(stateWiseData))
    return stateWiseData
})