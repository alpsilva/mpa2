import React from 'react';

import {
    Button,
    ButtonGroup,
 } from '@mui/material';

function Navigator() {
  return (
    <div className='nav'>
        <div className='nav-buttons' style={{width: '100%'}}>
        <Button variant="contained">Filtros</Button>
        <ButtonGroup variant="outlined" style={{width: '100%'}} aria-label="outlined button group">
            <Button>Demandas</Button>
            <Button>Tarefas</Button>
            <Button>Recursos</Button>
        </ButtonGroup>
        </div>
    </div>
  )
}

export default Navigator;
