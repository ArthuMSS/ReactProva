import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acai from './Pages/BASICOS/vendaAçai';
import Signo from './Pages/BASICOS/signoLibra';
import Sorveteria from './Pages/BASICOS/sorveteriaCalcular';
import Salario from './Pages/BASICOS/salarioLiquido';
import Paradas from './Pages/BASICOS/paradasAbastecimento';
import Situacao from './Pages/BASICOS/avalieSituacao';
import Febre from './Pages/BASICOS/avalieSuafebre';
import Orcamento from './Pages/BASICOS/sitOrcamento';
import Cinema from './Pages/BASICOS/cinema';

import Seq from './Pages/REPETICAO/seqNumeros';
import Retangulo from './Pages/REPETICAO/retangulo';
import SeqLinha from "./Pages/REPETICAO/seqLinhas";

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/acai" element={<Acai/>}/>
                <Route path="/sorveteria" element={< Sorveteria/>} />
                <Route path="/signo" element={<Signo/>} />
                <Route path="/salario" element={<Salario/>} />
                <Route path="/paradas" element={<Paradas/>} />
                <Route path="/situacao" element={<Situacao/>} />
                <Route path="/febre" element={<Febre/>} />
                <Route path="/orc" element={<Orcamento/>} />
                <Route path="/cinema" element={<Cinema/>} />

                <Route path="/seq" element={<Seq/>}/>
                <Route path="/ret" element={<Retangulo/>}/>
                <Route path="/linha" element={<SeqLinha/>}/>
            </Routes>
        </BrowserRouter>
    )
}