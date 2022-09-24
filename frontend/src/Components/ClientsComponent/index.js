import { Box, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from 'react';

export default function ClientsTable({setClient}) {
  const [ selectedClient, setSelectedClient ] = useState('cliente1');

  const handleChange = (event) => {
    setSelectedClient(event.target.value);
    setClient(event.target.value);
  }
  return (
    <Box sx={{ width: "100%", height: "33%",  marginBottom: "70px"}}>
      <Box sx={{ width: '45%', maxWidth: '200px', height: '24px', borderRadius: '15px', backgroundColor: '#BCCADA', margin: "auto"}}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>Clientes</Typography>
      </Box>
      <Box sx={{ paddingLeft: "10px"}}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedClient}
          onChange={handleChange}
        >
          <FormControlLabel sx={{ color: 'white' }} value='cliente1'  control={<Radio />} label='Cliente 1' />
          <FormControlLabel sx={{ color: 'white' }} value='cliente2' control={<Radio />} label='Cliente 2' />
          <FormControlLabel sx={{ color: 'white' }} value='cliente3' control={<Radio />} label='Cliente 3' />
        </RadioGroup>
      </Box>
    </Box>
  );
}
