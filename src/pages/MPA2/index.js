import Sidebar from '../../Components/Sidebar/Sidebar';
import Navigator from '../../Components/Sidebar/Navigator';
import DFG from '../../Components/DFG/DFG';
import { cards } from '../../Components/Sidebar/Data';
import HomeIcon from '@mui/icons-material/Home';
import StatisticsTable from '../../Components/StatisticsComponent'
import DetailsTable from '../../Components/DetailsComponent';
import ExibitionTable from '../../Components/ExibitionComponent';
import { Box } from '@mui/material';
import mock from '../../mock.json'
import axios from 'axios';

function SVGConditional(exibicao, freqSvg, perfSvg) {
    if(exibicao === 'frequencia') {
        return (<DFG DFGProps={freqSvg} />);
    }
    return (<DFG DFGProps={perfSvg} />);
}

export default function MPA2 () {
    const data = this.props.location.state.props;

    return (
        <Box sx={{backgroundColor:'#BCCADA', height: '100vh', width: '100vw', display: 'flex'}}>
            <Box sx={{width: '30%', height: '100%', backgroundColor: '#131E2F'}}>
                <HomeIcon color="primary" sx={{ fontSize: 50 }} />
                <Navigator />
                <Sidebar cards={cards}/>
            </Box>
            <Box sx={{width: '70%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <Box sx={{height: '25%', display: 'flex', justifyContent: 'space-around'}} >
                    <ExibitionTable exibitionProps={data.filters.exibicao} /> 
                    <DetailsTable detailsTableProps={mock.detalhes} />
                    <StatisticsTable statisticsProp={data.stats} />
                </Box>
                <Box>
                    {SVGConditional(data.filters.exibicao, data.freq_svg, data.perf_svg)}
                </Box>
            </Box>
        </Box>
    )
}