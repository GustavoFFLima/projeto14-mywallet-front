import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"


export default function PaginaPrincipal() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function dadosConta(event){
        event.preventDefault();
        axios
            .post(`http://127.0.0.1:5000/cadastro`, {
                email: email,
                name: name,
                confirmPassword: confirmPassword,
                password: password
            } )
            .then(pagina)
            .catch((erro) => console.log(erro))
    }

    function pagina(){
        
        navigate("/")
    }

    return (
        <HomeStyled>
            <h1>MyWallet</h1>
            <form onSubmit={dadosConta}>  
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required></input>  
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required></input>
                <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></input>
                <input type="text" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} placeholder="Confirme a senha" required></input>
                <button type="submit" >Cadastrar</button>
            </form>
            <Link to={"/"}><p>Já tem uma conta? Faça login!</p></Link>
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
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

        background: #FFFFFF;
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