import { SetStateAction, useState } from 'react';
import { Upload } from './pages/Upload';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes'
import { Preview } from './Components/Preview';
function App() {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles: SetStateAction<never[]>) => {
      setFiles(savedFiles)
  };
  return (
    <AppRoutes />
   
  );
}

export default App;