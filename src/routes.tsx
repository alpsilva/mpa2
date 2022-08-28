import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MPA2 from './pages/MPA2';
import Upload from './pages/Upload/index'
import { Links } from './types/enums'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Links.UPLOAD} element={<Upload />} />
                <Route path={Links.MPA2} element={<MPA2 />} />
            </Routes>
        </BrowserRouter>
    );
}