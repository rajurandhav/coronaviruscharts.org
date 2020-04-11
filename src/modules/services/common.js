import memoizeOne from "memoize-one"
import _ from 'lodash';

export const getStatObject = memoizeOne((data) => {
    // console.log(data)
    return [
        [{
            name: "confirmed",
            value: data?.confirmed ?? 0,
            delta: data?.deltaconfirmed??0
        },
        {
            name: "recovered",
            value: data?.recovered ?? 0
        },
        {
            name: "active",
            value: data?.active ?? 0
        },
        {
            name: "died",
            value: data?.deaths ?? 0
        }],
        [{
            name: "confirmed",
            value: data?.confirmed ?? 0
        },
        {
            name: "hospitals",
            value: data?.totalHospitals ?? 0
        },
        {
            name: "beds",
            value: data?.totalBeds ?? 0
        }]
    ]
}, (oldProps, newProps) => {
    return (_.isEqual(oldProps[0], newProps[0]))
})
