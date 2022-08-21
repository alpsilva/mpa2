
import * as React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navigator from './Components/Navigator';
import HomeIcon from '@mui/icons-material/Home';
import { cards } from './data';

 function App() {
  return (
  <div>
      <div className='home'>
        <HomeIcon color="primary" sx={{ fontSize: 50 }} />
      </div>
      <Navigator />
      <Sidebar cards={cards}/>
  </div>);
}

export default App;