import React from 'react';
import './style.css'
import Sidebar from './Components/Sidebar';
import Navigator from './Components/Navigator';
import HomeIcon from '@mui/icons-material/Home';
import StatisticsTable from './Components/StatisticsComponent/StatisticsTable'
import { cards } from './data';
import { statistics } from './statistics'

export default function MPA2 () {
    return (
        <div width='100vw' height='100vh'>
            <div className='home'>
                <HomeIcon color="primary" sx={{ fontSize: 50 }} />
            </div>
            <Navigator />
            <Sidebar cards={cards}/>
            <StatisticsTable statisticsProp={statistics}></StatisticsTable>
        </div>
    )
}