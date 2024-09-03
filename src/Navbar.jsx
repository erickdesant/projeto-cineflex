import React from 'react';
import styled from "styled-components";

export default function Navbar (){
    return(
        <Topnavbar>
        <h1>Hello</h1>
        </Topnavbar>
    )
}

const Topnavbar = styled.div`
    display: flex;
    width : 100%;
    justify-content: center;
    background-color: #EE897F;
    font-family: 'Raleway', sans-serif;
    color: white;
`