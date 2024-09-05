import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import HomePage from './HomePage';
import Sessoes from './Sessoes';
import Assentos from './Assentos.jsx';
import Sucesso from "./Sucesso.jsx";

export default function App () {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                    <Route path = "assentos/:idSessao" element = {<Assentos/>}/>
                    <Route path = "/sucesso" element = {<Sucesso/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}