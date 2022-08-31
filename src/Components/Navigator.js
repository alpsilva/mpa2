import React from 'react';

import {
    Button,
    ButtonGroup,
 } from '@mui/material';

function Navigator() {
  return (
    <div className='nav'>
        <div className='nav-buttons'>
        <Button variant="contained">Filtros</Button>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Demandas</Button>
            <Button>Tarefas</Button>
            <Button>Recursos</Button>
        </ButtonGroup>
        </div>
    </div>
  )
}

export default Navigator;