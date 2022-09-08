import Sidebar from '../../Components/Sidebar/Sidebar';
import Navigator from '../../Components/Sidebar/Navigator';
import DFG from '../../Components/DFG/DFG';
import { cards } from '../../Components/Sidebar/Data';
import { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StatisticsTable from '../../Components/StatisticsComponent'
import DetailsTable from '../../Components/DetailsComponent';
import ExibitionTable from '../../Components/ExibitionComponent';
import { Box } from '@mui/material';
import mock from '../../mock.json'
import axios from 'axios';

export default function MPA2 () {
    const [data, getData] = useState('');

    useEffect(() => {
        getFluxogram();
    }, []);

    const getFluxogram = () => {
        axios.get('//localhost:1234/bob/api/fluxograma')
            .then((response) => {
                const dados = response.data;
                getData(dados);
            })
    }

    return (
        <Box sx={{backgroundColor:'#BCCADA', height: '100vh', width: '100vw', display: 'flex'}}>
            <Box sx={{width: '30%', height: '100%', backgroundColor: '#131E2F'}}>
                <HomeIcon color="primary" sx={{ fontSize: 50 }} />
                <Navigator />
                <Sidebar cards={cards}/>
            </Box>
            <Box sx={{width: '70%', height: '25%', display: 'flex', justifyContent: 'space-evenly'}}>
                <ExibitionTable selected={mock.exibicao}/> 
                <DetailsTable selected={mock.detalhes}/>
                <StatisticsTable statisticsProp={mock.estatisticas} />
            </Box>
        </Box>
    )
}