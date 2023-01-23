import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import PaginaPrincipal from "./PaginaPrincipal";
import Cadastro from "./Cadastro"
import Home from "./Home"

export default function App() {
 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/nova-entrada" element={<PaginaPrincipal />} />
            <Route path="/nova-saida" element={<PaginaPrincipal />} /> */}
        </Routes>
    </BrowserRouter>
 )
}