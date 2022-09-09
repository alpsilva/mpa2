import React from 'react';
import {
    FormControl, 
    FormControlLabel, 
    RadioGroup,
    Radio,
    TextField, 
 } from '@mui/material';


function CardItems({id, items}) {
    return (
        <>
            {id !== 'data-conclusao' ? (
                <FormControl>
                    <RadioGroup 
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={items[0].id}
                        name="radio-buttons-group">

                        {items.map(({ label, id }) => (
                            <FormControlLabel value={id} control={<Radio />} label={label} />
                            
                        ))}
                    </RadioGroup>
                </FormControl>
                ) : 
                (<div>
                    {items.map(({ label, id }) => (
                        <TextField className='text-field' id={id} label={label} variant="outlined" />
                        
                    ))}
                </div>)}
        </>  
    )
}

export default CardItems;