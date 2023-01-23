import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"
import AuthContext from "../contexts/AuthContext"

export default function PaginaPrincipal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userData, setUserData } = useContext(AuthContext);
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
        <PrincipalStyled>
            <h1>MyWallet</h1>
            <form onSubmit={loginConta}>    
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required></input>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></input>
                <button type="submit" >Entrar</button>
            </form>
            <Link to={"/cadastro"}><p>Primeira vez? Cadastre-se!</p></Link>
        </PrincipalStyled>
    )
}

const PrincipalStyled = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        text-align: center;
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
            text-align: center;
            text-decoration: none;

            color: #ffffff;
        }
    }
`