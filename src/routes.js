import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acai from './Pages/vendaAçai';
import Signo from './Pages/signoLibra';
import Sorveteria from './Pages/sorveteriaCalcular';

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="acai" element={<Acai/>}/>
                <Route path="sorveteria" element={< Sorveteria/>} />
                <Route path="signo" element={<Signo/>} />
            </Routes>
        </BrowserRouter>
    )
}