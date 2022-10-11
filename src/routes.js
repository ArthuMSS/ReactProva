import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acai from './Pages/vendaAçai';
import Signo from './Pages/signoLibra';
import Sorveteria from './Pages/sorveteriaCalcular';
import Salario from './Pages/salarioLiquido';
import Paradas from './Pages/paradasAbastecimento';
import Avaliacao from './Pages/avalieSituacao';

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/acai" element={<Acai/>}/>
                <Route path="/sorveteria" element={< Sorveteria/>} />
                <Route path="/signo" element={<Signo/>} />
                <Route path="/salario" element={<Salario/>} />
                <Route path="/paradas" element={<Paradas/>} />
                <Route path="/avaliacaoo" element={<Avaliacao/>} />
            </Routes>
        </BrowserRouter>
    )
}