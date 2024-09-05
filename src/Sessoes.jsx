import React from 'react';
import styled from "styled-components";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';
import {useEffect} from "react";

export default function Sessoes(){

    const [sessoes,setSessoes] = React.useState([])

    const id = useParams().idFilme.slice(1)

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
        req.then(res => {
            setSessoes(res.data.days)
        })
    },[])

    return(
        <>
            <BodyContainer>
                <p> Selecione o horário</p>
                {sessoes.map((sessao) => (
                    <SessionContainer key={sessao.id}>
                        <p>{sessao.weekday},{sessao.date}</p>
                        <hr/>
                        <TimeContainer>
                            {sessao.showtimes.map((showtime) =>
                                <HourDiv key = {showtime.id}> <Link to={`/assentos/:${showtime.id}`}><p>{showtime.name}</p>
                                </Link></HourDiv>
                            )}
                        </TimeContainer>
                    </SessionContainer>
                ))}
            </BodyContainer>
        </>
    )
}

const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
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
        
    }
`
const SessionContainer = styled.div`
    background-color: #2B2D36;
    border-radius: 8px;
    color: white;
    width: 80vw;
    margin: 10px;
    hr{
        border: 1px solid #4E5A65;
        width: 90%;
    }
`
const TimeContainer = styled.div`
        display:flex;
`
const HourDiv = styled.div`
    border: 2px solid #EE897F;
    border-radius:4px;
    margin:10px;
    p {
        font-family: 'Sarala',sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 26.09px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #EE897F;
    }
`
