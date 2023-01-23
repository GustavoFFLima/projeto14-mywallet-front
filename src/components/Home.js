import React from 'react';
import { useNavigate } from 'react-router-dom'
import { PlusCircle, SignOut, MinusCircle } from "phosphor-react";
import styled from "styled-components"


export default function Home() {
    const navigate = useNavigate();

    function colocarValor(entrada){
        navigate(entrada)
    }

    return (
        <HomeStyled>
            <Header>
                <h1>Olá, Fulano</h1>
                <SignOut size={32} color="#ffffff" />
            </Header>
            <CarteiraStyled>
                <p>test</p>
            </CarteiraStyled>
            <Footer>
                <button onClick={() => colocarValor("/nova-entrada")}>
                    <div>
                    <PlusCircle size={24} color="#ffffff" />{" "}
                    </div>
                    <p>Nova entrada</p>
                </button>
                <button onClick={() => colocarValor("/nova-saida")}>
                    <div>
                    <MinusCircle size={24} color="#ffffff" />
                    </div>
                    <p>Nova Saída</p>
                </button>
            </Footer>
        </HomeStyled>
    )
}

const Header = styled.header`
    width: 90vw;
    display: flex;
    justify-content: space-between;
    margin: 15px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        background: #8C11BE;
        color: #ffffff;
    }
`

const CarteiraStyled = styled.div`
    height: 300px;
    background: #ffffff;
    margin: 15px;
    background: #FFFFFF;
    border-radius: 5px;
`

const HomeStyled = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: #8C11BE;
    padding-left: 25px;
    padding-right: 25px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
    button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 156px;
        height: 114px;
        
        margin: 15px;
        padding: 15px;
        cursor: pointer;
        div {
            width: 24px;
        }

        background: #A328D6;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
    }
`;