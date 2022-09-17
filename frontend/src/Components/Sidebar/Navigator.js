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
        <Button variant='contained'>Demandas</Button>
        <Button variant='contained'>Tarefas</Button>

        <ButtonGroup variant="outlined" style={{width: '100%'}} aria-label="outlined button group">
            <Button>Recursos</Button>
        </ButtonGroup>
        </div>
    </div>
  )
}

export default Navigator;
