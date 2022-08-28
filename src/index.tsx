import { createRoot } from 'react-dom/client';
import App from './App';
import MPA2 from './pages/MPA2'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);