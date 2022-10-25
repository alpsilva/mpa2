import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import FilterScreen from './pages/FilterScreen';
import DemandsScreen from './pages/DemandsScreen';
import ActivitiesScreen from './pages/ActivitiesScreen';
import { Upload } from './pages/Upload';
import { Links } from './types/enums'

export default function AppRoutes() {
    const [data, setData] = useState({});

    return (
        <BrowserRouter>
            <Routes>
                <Route path={Links.Upload} element={<Upload setData={setData} />} />
                <Route path={Links.Filter} element={<FilterScreen setData={setData} data={data}/>} />
                <Route path={Links.Demands} element={<DemandsScreen />} />
                <Route path={Links.Activities} element={<ActivitiesScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
