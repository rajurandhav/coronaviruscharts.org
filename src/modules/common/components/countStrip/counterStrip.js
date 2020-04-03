import React from 'react';
import './counterStrip.css'
export const CounterStrip = React.memo(({
    regionName,
    active,
    recovered,
    died,
    onClickHandler
}) => {
    return (
        <div className='count-strip-container'>
            <div className='item' onClick={onClickHandler ? onClickHandler : null}>
                <span className="name">{regionName}</span>
            </div>
            <div className='item count'>
                <div className='count-item active'>
                    <div>Active</div>
                    <div className="count-val">{active ? active : 0}</div>
                </div>
                <div className='count-item recovered'>
                    <div>Recoved</div>
                    <div className="count-val">{recovered ? recovered : 0}</div>
                </div>
                <div className='count-item died'>
                    <div>Died</div>
                    <div className="count-val">{died ? died : 0}</div>
                </div>
            </div>
        </div>
    );
})
