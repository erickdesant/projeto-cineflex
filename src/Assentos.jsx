import React, {useEffect} from 'react'
import styled from "styled-components";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Assentos(){
    const [assentos,setAssentos] = React.useState([]);
    const idSessao = useParams().idSessao.slice(1)
    const [assentosEscolhidos,setAssentosEscolhidos] = React.useState([])


    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        req.then(res => {
            setAssentos(res.data.seats)
        })
    },[])

    function createTicket(ids,name,cpf){
        console.log(ids,name,cpf)
    }
    function selecionaAssentos(id){
        if(assentosEscolhidos.includes(id)){
            setAssentosEscolhidos(assentosEscolhidos.filter(assentoId => assentoId !== id));
            console.log(assentosEscolhidos)
        }
        else{
            setAssentosEscolhidos([...assentosEscolhidos,id])
            console.log(assentosEscolhidos)
        }
    }

    return(
        <>
            <BodyContainer>
                <p>Selecione o(s) assento(s)</p>
                    <AssentosContainer>
                        {assentos.map((assento) => (
                            <Assento key = {assento.id} state = {assento.isAvailable} clicked = {assentosEscolhidos.includes(assento.id)}>
                                <button onClick={() =>  {
                                    if(assento.isAvailable)
                                        return selecionaAssentos(assento.id)
                                    }
                                }>
                                    <p>{assento.name}</p>
                                </button>
                            </Assento>
                        ))}
                    </AssentosContainer>
                    <hr/>
            </BodyContainer>
        </>
    )
}

const BodyContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #212226;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    p{
        display:block;
        color:white;
        font-size: 24px;
        padding: 20px;
        font-family: 'Sarala',sans-serif;
        font-weight: 400;
        line-height: 39.13px;
        letter-spacing: 0.04em;
        text-align: center;
    }
`

const AssentosContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    
`
const Assento = styled.div`
    border-radius: 50%;
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    margin: 10px;
    background-color: ${({state,clicked}) => (state === true ? clicked === true ? '#FADBC5' :'#9DB899' : '#2B2D36')};
    border: ${({clicked}) => clicked === true ? '2px solid #EE897F' :'none'};
    p{
        color: #2B2D36;
        font-family: 'Roboto',sans-serif;
        font-size: 11px;
        font-weight: 400;
        line-height: 12.89px;
        letter-spacing: 0.04em;
        text-align: center;
    }
    button {
        
        all: unset; 
        display: inline-block; /
        cursor: pointer; 
    }
`