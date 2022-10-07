import { Box, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from 'react';

export default function DemandsTable({ demand, setDemand }) {
  const [selectedDemand, setSelectedDemand] = useState(demand === 'evolutiva'? 'manutencaoEvolutiva': demand);

  const handleChange = (event) => {
    setSelectedDemand(event.target.value);
    setDemand(event.target.value);
  }

  return (
    <Box sx={{ width: "100%", height: "33%", marginBottom: "40px", marginTop: "20px"}}>
      <Box sx={{ width: '45%', maxWidth: '200px', borderRadius: '15px', backgroundColor: '#BCCADA', marginLeft: "10px"}}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>Tipos de demanda</Typography>
      </Box>
      <Box sx={{ paddingLeft: "10px"}}>
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
