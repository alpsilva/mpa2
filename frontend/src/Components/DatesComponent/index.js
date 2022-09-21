import { Box, Typography } from "@mui/material";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';




export default function DatesTable({ setStartDate, setEndDate }) {

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }

  return (
    <Box sx={{ width: "100%", height: "33%" }}>
      <Box sx={{ width: '45%', borderRadius: '15px', backgroundColor: '#BCCADA' }}>
        <Typography >Datas</Typography>
      </Box>
      <Box>
        <Box mt={"12px"}>
          <Typography sx={{ color: 'white' }} >Início</Typography>
          <input type="date" onChange={handleStartDateChange} id="start" name="start"/>
        </Box>
        <Box mt={"12px"}>
          <Typography sx={{ color: 'white' }}>Fim</Typography>
          <input type="date" onChange={handleEndDateChange} id="end" name="end"/>
        </Box>
      </Box>
    </Box>
  );
}
