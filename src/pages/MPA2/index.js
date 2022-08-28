import './style.css'
import Sidebar from '../../Components/Sidebar';
import Navigator from '../../Components/Navigator';
import DFG from '../../Components/DFG/DFG';
import HomeIcon from '@mui/icons-material/Home';
import StatisticsTable from '../../Components/StatisticsComponent/StatisticsTable'
import { cards, statistics } from '../../data';

export default function MPA2 () {
    return (
        <div width='100vw' height='100vh' style={{backgroundColor:'#BCCADA',}}>
            <div className='home'>
            <HomeIcon color="primary" sx={{ fontSize: 50 }} />
            </div>
            <Navigator />
            <Sidebar cards={cards}/>
            <StatisticsTable statisticsProp={statistics} />
            <DFG/>
        </div>
    )
}