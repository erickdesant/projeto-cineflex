import React from 'react';
import styled from "styled-components";

export default function Navbar (){
    return(
        <Topnavbar>
            <img src="clapperboard1.png" alt ="logo"/>
            <h1>Cineflex</h1>
        </Topnavbar>
    )
}

const Topnavbar = styled.div`
    display: flex;
    width : 100%;
    justify-content: center;
    align-items: center;
    background-color: #EE897F;
    font-family: 'Raleway', sans-serif;
    color: #FADBC5;
    height:10vh;
    h1{
        font-weight:600;
        font-size:34px;
        margin-top:10px;
        margin-left: 10px;
    }
`