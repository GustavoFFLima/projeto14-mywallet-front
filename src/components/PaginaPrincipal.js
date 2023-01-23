import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"


export default function PaginaPrincipal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function home(){
        navigate("/home")
    }

    function loginConta(event){
        event.preventDefault();
        axios
            .post(`http://localhost:5000/`, {
                email: email,
                password: password
            } )
            .then(home)
            .catch((erro) => console.log(erro))
    }

    return (
        <HomeStyled>
            <h1>MyWallet</h1>
            <form onSubmit={loginConta}>    
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required></input>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></input>
                <button type="submit" >Entrar</button>
            </form>
            <Link to={"/cadastro"}><p>Primeira vez? Cadastre-se!</p></Link>
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #8C11BE;
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
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
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;

            color: #DBDBDB;
        }
    }
    button{
        width: 309px;
        height: 45px;
        margin: 0px 36px;

        background: #A328D6;
        border-radius: 4.63636px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
    a{
        
        p{
            margin-top: 25px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 13.976px;
            line-height: 17px;
            text-align: center;
            text-decoration-line: none;

            color: #ffffff;
        }
    }
`