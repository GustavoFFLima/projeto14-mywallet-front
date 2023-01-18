import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import PaginaPrincipal from "./PaginaPrincipal";

export default function App() {
 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaPrincipal />}></Route>
        </Routes>
    </BrowserRouter>
 )
}