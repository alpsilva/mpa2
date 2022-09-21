import { Box, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from 'react';

export default function ClientsTable() {
  const [ selectedClient, setSelectedClient ] = useState('cliente1');

  const handleChange = (event) => {
    setSelectedClient(event.target.value);
  }
  return (
    <Box sx={{ width: "100%", height: "33%" }}>
      <Box sx={{ width: '45%', height: '10%', borderRadius: '15px', backgroundColor: '#BCCADA'}}>
        <Typography>Clientes</Typography>
      </Box>
      <Box>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedClient}
          onChange={handleChange}
        >
          <FormControlLabel value='cliente1' control={<Radio />} label='Cliente 1' />
          <FormControlLabel value='cliente2' control={<Radio />} label='Cliente 2' />
          <FormControlLabel value='cliente3' control={<Radio />} label='Cliente 3' />
        </RadioGroup>
      </Box>
    </Box>
  );
}
