import React from 'react';
import { Typography } from '@mui/material';

interface ActivitiesPopupProps {
    nomeAtividade: string,
    recursoExecutor: string,
    dataInicio: string,
    dataTermino: string,
    duracaoAtividade: string,
};

const ActivitiesPopup = (props: ActivitiesPopupProps) => {
    const {nomeAtividade, recursoExecutor, dataInicio, dataTermino, duracaoAtividade} = props;
    return(
        <div style={{backgroundColor: '#f2f0f0', borderRadius: '15px', width: '15%', minWidth: '300px', height: '10%', maxHeight: '150px', padding: '2%'}}>
            <Typography variant='h6' color='#262626'>
                Nome da Atividade: {nomeAtividade}
                Recurso que executou: {recursoExecutor}
                Data de Inicio: {dataInicio}
                Data de Término: {dataTermino}
                Duracação da Atividade: {duracaoAtividade}
            </Typography>
        </div>
    );
};

export default ActivitiesPopup;