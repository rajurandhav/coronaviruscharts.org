import memoizeOne from "memoize-one"
import _ from 'lodash';

export const getStatObject = memoizeOne((data) => {
    // console.log(data)
    return [
        {
            name: "confirmed",
            value: data?.confirmed ?? 0
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
        }]
}, (oldProps, newProps) => {
    return (_.isEqual(oldProps[0], newProps[0]))
})