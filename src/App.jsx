import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import HomePage from './HomePage';
import Sessoes from './Sessoes';

export default function App () {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}