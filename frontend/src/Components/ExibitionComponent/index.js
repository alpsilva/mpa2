import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import './style.css';
import { useState } from 'react';

const ExibitionTable = ({exibitionProps, setExibicao}) => {
  const [ exibitionState, setExibitionState] = useState(exibitionProps);

  const handleChange = (event) =>{
    setExibitionState(event.target.value);
    setExibicao(event.target.value)
  }
    return (
        <Box sx={{width: "20%", height: "60%", backgroundColor: "#131E2F",}}>
            <Box sx={{height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '1em'}}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={exibitionState}
                onChange={handleChange}
                  >
                <FormControlLabel value="frequencia" control={<Radio sx={{color:"#FBFBFF", '& .MuiSvgIcon-root': {fontSize: 28,},}} />} label="Frequência" sx={{color: '#FBFBFF'}} />
                <FormControlLabel value="desempenho" control={<Radio sx={{color:"#FBFBFF", '& .MuiSvgIcon-root': {fontSize: 28,},}} />} label="Desempenho" sx={{color: '#FBFBFF'}} />
                </RadioGroup>
            </FormControl>
            </Box>
            <Box sx={{backgroundColor: "#131E2F", height:'22%', width: '62%', paddingLeft: '1em', borderRadius: '0 0 15px 15px'}}>
                <Typography variant='p' color='#FBFBFF' >
                  Exibir por
                </Typography>
            </Box>
        </Box>
    )
}

export default ExibitionTable;
