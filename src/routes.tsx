import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MPA2 from './pages/MPA2';
import Upload from './pages/Upload'
import { Links } from './types/enums'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Upload />}>
                    <Route path="mpa2" element={<MPA2 />}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}