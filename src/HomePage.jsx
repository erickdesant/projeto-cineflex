import React from 'react';
import styled from 'styled-components';
import {useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

export default function HomePage(){

    const [filmes,setFilmes] = React.useState([]);

    useEffect(() => {
        const req =  axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        req.then( res => {
            setFilmes(res.data);
        });
    },[])

    return(
        <BodyContainer>
            <p>Em Cartaz</p>
            <MovieContainer>

                {filmes.map(filme => (
                    <FilmDiv key={filme.id}>
                       <Link to = {`/sessoes/:${filme.id}`}> <img src={filme.posterURL} alt={filme.title}/>
                       </Link>
                    </FilmDiv>
                ))}
            </MovieContainer>
        </BodyContainer>
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
        text-align: center;
    }
`

const MovieContainer = styled.div`
    max-width: 90vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    
`
const FilmDiv = styled.div`
    display:flex;
    margin: 10px;
    border-radius: 8px;
    img{
        width: 145px;
        height: 210px;
        border-radius: 8px;
    }
`