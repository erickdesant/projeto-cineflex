import React from 'react';
import styled from 'styled-components';
import {useEffect} from 'react'
import axios from 'axios';

export default function Body(){

    const [filmes,setFilmes] = React.useState([]);

    useEffect(() => {
        const req =  axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        req.then( res => {
            setFilmes(res.data);
        });
    },[])

    return(
        <BodyContainer>
            <MovieContainer>
            {filmes.map(filme => (
                <FilmDiv key={filme.id}>
                    <img src={filme.posterURL} alt={filme.title} />
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
    justify-content: center;
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