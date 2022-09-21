import Sidebar from "../../Components/Sidebar/Sidebar";
import { Box } from "@mui/material";

export default function DemandsScreen() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Box sx={{width: '30%', height: '100%'}}>
        <Sidebar />
      </Box>
    </div>
  );
}
