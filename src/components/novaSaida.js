import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"
import AuthContext from "../contexts/AuthContext"


export default function PaginaPrincipal() {
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const { userData } = useContext(AuthContext);
    const navigate = useNavigate();

    function home(){
        navigate("/home")
    }

    function loginConta(event){
        event.preventDefault();
        axios
            .post(`http://localhost:5000/nova-entrada`, {
                valor: valor,
                descricao: descricao,
            }, {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                },
            })
            .then(home)
            .catch((erro) => console.log(erro))
    }

    return (
        <HomeStyled>
            <h1>Nova entrada</h1>
            <form onSubmit={loginConta}>    
                <input type="text" value={valor} onChange={e => setValor(e.target.value)} placeholder="valor" required></input>
                <input type="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="descrição" required></input>
                <button type="submit" >Salvar entrada</button>
            </form>
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        text-align: center;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        background: #8C11BE;
        color: #ffffff;
    }
    input{
        width: 303px;
        height: 45px;
        margin: 6px 36px;

        
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            padding-left: 15px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

            color: #000000;
        }
    }
    button{
        width: 309px;
        height: 45px;
        margin: 0px 36px;

        background: #A328D6;
        border-radius: 4.63636px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #FFFFFF;
    }
    a{
        
        p{
            margin-top: 25px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            text-decoration-line: none;

            color: #ffffff;
        }
    }
`