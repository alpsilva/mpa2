import Sidebar from '../../Components/Sidebar';
import Navigator from '../../Components/Navigator';
import DFG from '../../Components/DFG/DFG';
import HomeIcon from '@mui/icons-material/Home';
import StatisticsTable from '../../Components/StatisticsComponent'
import DetailsTable from '../../Components/DetailsComponent';
import ExibitionTable from '../../Components/ExibitionComponent';
import { cards, statistics } from '../../data';
import { Box } from '@mui/material'

export default function MPA2 () {
    return (
        <Box sx={{backgroundColor:'#BCCADA', height: '100vh', width: '100vw', display: 'flex'}}>
            <Box sx={{width: '30%', height: '100%', backgroundColor: '#131E2F'}}>
                <HomeIcon color="primary" sx={{ fontSize: 50 }} />
                <Navigator />
                <Sidebar cards={cards}/>
            </Box>
            <Box sx={{width: '70%', height: '30%', display: 'flex', justifyContent: 'space-evenly'}}>
                <ExibitionTable /> 
                <DetailsTable />
                <StatisticsTable statisticsProp={statistics} />
            </Box>
        </Box>
    )
}