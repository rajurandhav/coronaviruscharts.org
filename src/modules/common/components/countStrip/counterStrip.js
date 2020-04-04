import React from 'react';
import './counterStrip.css'
import _ from 'lodash';

export const CounterStrip = React.memo(({
    regionName,
    data,
    onClickHandler
}) => {
    console.log(regionName)
    return (
        <div className='count-strip-container'>
            <div className='item' onClick={onClickHandler ? onClickHandler : null}>
                <span className="name">{regionName}</span>
            </div>
            <div className='item count'>
                {
                    data && data.map(item => {
                        return (
                            <div key={`regionName-${item.name}`} className={`count-item ${item.name}`}>
                                <div>{item.name}</div>
                                <div className="count-val">{item && item.value ? item.value : 0}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}, (oldProps, newProps) => {
    return (
        oldProps.regionName === newProps.regionName
        && _.isEqual(oldProps, newProps)
    )
})
