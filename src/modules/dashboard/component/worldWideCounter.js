import React, { useEffect, useCallback } from 'react';
import { Card, CardContent, Typography, Paper  } from '@material-ui/core';
import './worldWideCounter.css'
import { observer } from 'mobx-react'
import { useStores } from '../../../hooks/use-stores.hooks'

export const WorldWideCounter = observer(() => {
    const getIndiaCount = useCallback(() => {
        const { getIndiaCount } = coronaTraker
        getIndiaCount()
      }, [])

      useEffect(() => {
        getIndiaCount();
      }, [getIndiaCount])

    const { coronaTraker } = useStores()
    const { indiaCount } = coronaTraker;
    return(
        <React.Fragment>
        <header>
            <Typography variant="h1" color="primary" gutterBottom>
                INDIA
            </Typography>
        </header>
        <div className="main">
            <Card className="totalCard">
                <CardContent>
                <Typography className="title" color="textSecondary" gutterBottom>
                    Total
                </Typography>
                <Typography variant="h3" component="h2" className="title">
                    {indiaCount?.summary?.total}
                </Typography>
                </CardContent>
            </Card>
            <Card className='confirmedCard'>
                <CardContent>
                <Typography className="title" color="textSecondary" gutterBottom>
                    Confirmed Cases 
                </Typography>
                <Typography variant="h3" component="h2" className="title">
                    {indiaCount?.summary?.confirmedCasesIndian}
                </Typography>
                </CardContent>
            </Card>

            <Card className='recoveredCard'>
                <CardContent>
                <Typography className="title" color="textSecondary" gutterBottom>
                    Recovered 
                </Typography>
                <Typography variant="h3" component="h2" className="title">
                    {indiaCount?.summary?.discharged}
                </Typography>
                </CardContent>
            </Card>

            <Card className='deathsCard'>
                <CardContent>
                <Typography className="title" color="textSecondary" gutterBottom>
                    Deaths 
                </Typography>
                <Typography variant="h3" component="h2" className="title">
                    {indiaCount?.summary?.deaths}
                </Typography>
                </CardContent>
            </Card>
        </div>
        </React.Fragment>
    )
})
    
