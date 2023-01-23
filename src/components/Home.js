import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { PlusCircle, SignOut, MinusCircle } from "phosphor-react";
import styled from "styled-components"
import axios from 'axios';


export default function Home() {
    const navigate = useNavigate();
    const [ database, setDatabase ] = useState([])

    function colocarValor(entrada){
        navigate(entrada)
    }

    useEffect(() => {
        axios
            .get(`http://localhost:5000/home`)
            .then((response) => setDatabase(response.data))
            .catch((erro) => console.log(erro));
    }, [])

    return (
        <HomeStyled>
            <Header>
                <h1>Olá, Fulano</h1>
                <SignOut size={32} color="#ffffff" />
            </Header>
            <CarteiraStyled>
                {database.length === 0 ? <NoMovimentations>
                    <NoMovimetationsText>
                        Não há registros de entrada ou saída
                    </NoMovimetationsText>
                </NoMovimentations> : <HasMovimetations>
                        <HasMovimetationsContainer>
                            {database.map(data => <Movimentation key={data._id}>
                                <Esquerda>
                                    <Data>{("0" + new Date(data.created).getDate()).slice(-2)}/{("0" + new Date(data.created).getMonth() + 1).slice(-2)}</Data>
                                    <Descricao>{data.descricao}</Descricao>
                                </Esquerda>
                                <Direita>
                                    <Valor operacao={data.operacao}>{data.valor}</Valor>
                                </Direita>
                            </Movimentation>)}
                        </HasMovimetationsContainer>
                    </HasMovimetations>}
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

const NoMovimentations = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NoMovimetationsText = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #868686;
    text-align: center;
`;

const HasMovimetations = styled.div`
    position: relative;
    width: 100%;
    height: 99%;
`;

const HasMovimetationsContainer = styled.div`
    width: 100%;
    height: 94%;
    overflow-y: scroll;
`;

const Movimentation = styled.div`
    margin-bottom: 16px;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;

const Esquerda = styled.div`
    display: flex;
`;

const Data = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #C6C6C6;
`;

const Descricao = styled.p`
    margin-left: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    float: right;
`;

const Direita = styled.div`
    display: flex;
`;

const Valor = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.operacao === "adição" ? "#03AC00" : "#C70000"}
`;

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