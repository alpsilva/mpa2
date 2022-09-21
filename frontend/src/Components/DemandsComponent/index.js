import { Box, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from 'react';

export default function DemandsTable({ setDemand }) {
  const [selectedDemand, setSelectedDemand] = useState('novoSistema');

  const handleChange = (event) => {
    setSelectedDemand(event.target.value);
    setDemand(event.target.value);
  }

  return (
    <Box sx={{ width: "100%", height: "33%", marginBottom: "80px"}}>
      <Box sx={{ width: '45%', borderRadius: '15px', backgroundColor: '#BCCADA' }}>
        <Typography>Tipos de demanda</Typography>
      </Box>
      <Box>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedDemand}
          onChange={handleChange}
        >
          <FormControlLabel sx={{ color: 'white' }} value='novoSistema' control={<Radio />} label='Novo Sistema' />
          <FormControlLabel sx={{ color: 'white' }} value='manutencaoEvolutiva' control={<Radio />} label='Manutenção Evolutiva' />
        </RadioGroup>
      </Box>
    </Box>
  );
}
