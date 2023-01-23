import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components"
import PaginaPrincipal from "./PaginaPrincipal";
import Cadastro from "./Cadastro"
import Home from "./Home"
import NovaEntrada from "./NovaEntrada"
import NovaSaida from "./novaSaida"
import AuthContext from "../contexts/AuthContext"

export default function App() {
    const [ userData, setUserData ] = useState(
        {
            email: "",
            name: "",
            Password: "",
            token: "",
            _id:""
        }
    )

 return (
    <AuthContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
            <ContainerStyled>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/nova-entrada" element={<NovaEntrada />} />
                    <Route path="/nova-saida" element={<NovaSaida />} />
                </Routes>
            </ContainerStyled>
        </BrowserRouter>
    </AuthContext.Provider>
 )
}

const ContainerStyled = styled.div`
    background-color: #8c11be;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box; 
`