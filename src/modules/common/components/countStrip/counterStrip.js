import React from 'react';
import './counterStrip.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import _ from 'lodash';
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

export const CounterStrip = React.memo(({
    regionName,
    backNavigator,
    data,
    onClickHandler
}) => {
    const { t } = useTranslation()
    
    return (
        <div className={classNames({ 'count-strip-container': true, 'nav-strip': backNavigator })}>
            <div className='item name-container' onClick={onClickHandler ? onClickHandler : null}>
                <span className="name">
                    {backNavigator && <ArrowBackIosIcon className="icon" size={10} fontSize="small"></ArrowBackIosIcon>}
                    {t(regionName)}
                </span>
            </div>
            <div className='item count'>
                {
                    data && data.map(item => {
                        return (
                            <div key={`regionName-${item.name}`} className={`count-item ${item.name}`}>
                                <div>{t(item.name)}</div>
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
