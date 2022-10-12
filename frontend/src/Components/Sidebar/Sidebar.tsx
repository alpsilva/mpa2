// import Card from './Card';
import Navigator from './Navigator';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Links } from '../../types/enums';

interface SidebarProps {
  children ?: any;
}

function Sidebar(props: SidebarProps) {
  const { children } = props;
  const navigate = useNavigate();
  return (
    <div style={{width: '100%', height: '100%', backgroundColor: '#131E2F'}}>
      <Box sx={{height: '25%'}}>
        {/* <HomeIcon color="primary" sx={{ fontSize: 50 }} onClick={navigate(Links.Upload)} /> */}
        <Navigator />
        {children}
      </Box>
      <Box sx={{height: '75%'}}>
      </Box>
    </div>
  )
}

export default Sidebar;