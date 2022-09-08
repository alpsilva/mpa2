import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
 } from '@mui/material';

 import CardItems from './CardItems';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Card({id, label, items}) {
  return (
    <div className='card'>
        <Accordion>
            <AccordionSummary
                className="card-title"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography> 
                    {label}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <div className='card-items'>
                    <Typography>
                        <CardItems id={id} items={items}/>
                    </Typography>

                </div>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default Card;