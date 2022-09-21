import { Box } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default function ActivitiesScreen () {
    return (
        <div style={{ width: "100%", height: "100%" }}>
        <Box sx={{width: '30%', height: '100%'}}>
          <Sidebar />
        </Box>
      </div>
    );
}