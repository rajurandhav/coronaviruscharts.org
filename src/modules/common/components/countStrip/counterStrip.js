import React from 'react';
import './counterStrip.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import _ from 'lodash';
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

const viewIcon = [
    {
        id: 0,
        component: (props) => {
            return <AssessmentIcon {...props}></AssessmentIcon>
        },
    },
    {
        id: 1,
        component: (props) => {
            return <LocalHospitalIcon {...props}></LocalHospitalIcon>
        }
    },
]

export const CounterStrip = React.memo(({
    regionName,
    backNavigator,
    data,
    onClickHandler
}) => {
    const { t } = useTranslation()

    const [view, setView] = React.useState(0)
    return (
        <div className={classNames({ 'count-strip-container': true, 'nav-strip': backNavigator })}>
            <div className='item name-container'>
                <span className="name" onClick={onClickHandler ? onClickHandler : null}>
                    {t(regionName)}
                </span>
                <span className='drill-down-stat'>
                    {
                        viewIcon.map(icon => {
                            return icon.component({
                                key: `drill-icon-${icon.id}`,
                                className: classNames({ icon: true, selected: view === icon.id }),
                                size: 10,
                                fontSize: 'small',
                                onClick: () => setView(icon.id)
                            })
                        })
                    }
                </span>
            </div>
            <div className='item count'>
                {
                    data && data[view].map(item => {
                        return (
                            <div key={`regionName-${item.name}`} className={`count-item ${item.name}`}>
                                <div>{t(item.name)}</div>
                                <div className="count-val">{item && item.value ? item.value : '-'}
                                    {item && item.delta ? <span className='delta-icon'>{item.delta}<ArrowDropUpIcon ></ArrowDropUpIcon></span> : ''}
                                </div>
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
