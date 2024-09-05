import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from "styled-components";

export default function Sucesso(){
    const location = useLocation();
    const info = location.state
    console.log(info)
    return(
        <>
            <BodyContainer>
                <h1>Pedido finalizado!</h1>
                <PedidoContainer>
                    <h2>Filme e sessão</h2>
                    <hr/>
                    <p>{info.movieTitle}</p>
                    <h2>Ingressos</h2>
                    <hr/>
                    {info.numeroAssentos.map((item, index) => (
                        <p key={index}>Assento {item}</p>
                    ))}
                    <h2>Comprador(a)</h2>
                    <hr/>
                    <p>Nome: {info.name}</p>
                    <p>CPF: {info.cpf}</p>
                </PedidoContainer>
                <button><StyledLink to="/"> Voltar para tela inicial</StyledLink></button>
            </BodyContainer>
        </>
    )
}

const BodyContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    background-color: #212226;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        font-family: 'Sarala',sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 39.13px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #9DB899;
        margin: 10px 0;
    }
    h2{
        font-family: 'Sarala',sans-serif;
        font-size: 22px;
        font-weight: 700;
        line-height: 35.87px;
        letter-spacing: 0.04em;
        text-align: left;
        color: #EE897F;

    }
    hr{
        border: 1px solid #4E5A65
    }
    p{
        font-family: 'Sarala',sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 32.61px;
        letter-spacing: 0.04em;
        text-align: left;

    }
    button{
        color:#2B2D36;
        background-color: #EE897F;
        font-family: 'Sarala',sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 29.35px;
        letter-spacing: 0.04em;
        text-align: center;
        border-radius:8px;
        margin:4px 0;
    }
    
`

const PedidoContainer = styled.div`
    background-color: #2B2D36;
    color:white;
    padding: 50px;
    margin: 10px;
    border-radius: 8px;
    width: 60vw;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color:#2B2D36;
`