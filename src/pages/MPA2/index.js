import Sidebar from '../../Components/Sidebar';
import Navigator from '../../Components/Navigator';
import DFG from '../../Components/DFG/DFG';
import { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StatisticsTable from '../../Components/StatisticsComponent'
import DetailsTable from '../../Components/DetailsComponent';
import ExibitionTable from '../../Components/ExibitionComponent';
import { Box } from '@mui/material'
import axios from 'axios';

export default function MPA2 () {
    const [data, getData] = useState('');

    useEffect(() => {
        getFluxogram();
    }, []);

    const getFluxogram = () => {
        axios.get('//localhost:8081/bob/api/filtro-estatisticas')
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
                <Sidebar cards={data.cards}/>
            </Box>
            <Box sx={{width: '70%', height: '25%', display: 'flex', justifyContent: 'space-evenly'}}>
                <ExibitionTable selected={data.exibicao}/> 
                <DetailsTable selected={data.detalhes}/>
                <StatisticsTable statisticsProp={data.estatisticas} />
            </Box>
        </Box>
    )
}