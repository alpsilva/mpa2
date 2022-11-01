import { Box, Typography } from "@mui/material";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';




export default function DatesTable({ startDate, endDate, setStartDate, setEndDate }) {

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }
  const sDate = typeof startDate === 'string' ? startDate.replace(/t.*/i, "") : "";
  const eDate = typeof endDate === 'string' ? endDate.replace(/t.*/i, "") : ""

  return (
    <Box sx={{ width: "100%", height: "33%"}}>
      <Box sx={{ width: '45%', maxWidth: '200px', borderRadius: '15px', backgroundColor: '#BCCADA', marginLeft: "10px" }}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold"  }}>Datas</Typography>
      </Box>
      <Box sx={{ paddingLeft: "10px"}}>
        <Box mt={"12px"}>
          <Typography sx={{ color: 'white' }} >Início</Typography>
          <input type="date" value={sDate} onChange={handleStartDateChange} id="start" name="start"/>
        </Box>
        <Box mt={"12px"}>
          <Typography sx={{ color: 'white' }}>Fim</Typography>
          <input type="date" value={eDate} onChange={handleEndDateChange} id="end" name="end"/>
        </Box>
      </Box>
    </Box>
  );
}
