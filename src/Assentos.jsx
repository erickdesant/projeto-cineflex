import React, {useEffect} from 'react'
import styled from "styled-components";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";


export default function Assentos(){
    const [assentos,setAssentos] = React.useState([]);
    const idSessao = useParams().idSessao.slice(1)
    const [assentosEscolhidos,setAssentosEscolhidos] = React.useState([])
    const navigate = useNavigate()
    const [numeroAssentos,setNumeroAssentos] = React.useState([])
    const [movieTitle,setMovieTitle] = React.useState()
    const [weekDay,setWeekDay] = React.useState()
    const [date,setDate] = React.useState()


    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        req.then(res => {
            setAssentos(res.data.seats)
            setMovieTitle(res.data.movie.title)
            setWeekDay(res.data.day.weekday)
            setDate(res.data.day.date)
        })
    },[])

    function createTicket(e,assentos){
        e.preventDefault()

        console.log(assentos,e.target.nome.value,e.target.cpf.value)
        axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', {
            ids : assentos,
            name : e.target.nome.value,
            cpf : e.target.cpf.value
        }).then(function (response) {
            console.log(response);
            navigate('/sucesso',{ state: { numeroAssentos, movieTitle:movieTitle,weekDay:weekDay,date:date,name: e.target.nome.value, cpf: e.target.cpf.value } })
        })
            .catch(function (error) {
                console.error(error);
            });
    }
    function selecionaAssentos(id,name){
        if(assentosEscolhidos.includes(id)){
            setAssentosEscolhidos(assentosEscolhidos.filter(assentoId => assentoId !== id))
            setNumeroAssentos(numeroAssentos.filter(assentoName => assentoName !== name))
        }
        else{
            setAssentosEscolhidos([...assentosEscolhidos,id])
            setNumeroAssentos([...numeroAssentos,name])
        }
    }

    return(
        <>
            <BodyContainer>
                <p>Selecione o(s) assento(s)</p>
                <form onSubmit={(e) => createTicket(e,assentosEscolhidos)}>
                    <AssentosContainer>
                        {assentos.map((assento) => (
                            <Assento key={assento.id} state={assento.isAvailable}
                                     clicked={assentosEscolhidos.includes(assento.id)}>
                                <button type = "button" onClick={() => {

                                    if (assento.isAvailable)
                                        return selecionaAssentos(assento.id,assento.name)
                                }
                                }>
                                    <p>{assento.name}</p>
                                </button>
                            </Assento>
                        ))}
                    </AssentosContainer>
                    <hr/>
                    <FormContainer>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome"/>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf"/>
                        <button type="submit">Reservar assento(s)</button>
                    </FormContainer>
                </form>
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
    hr{
        border: 1px solid #4E5A65;
        margin: 25px 0;
        width: 90%;
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

const FormContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    label{
        color:white;
    }
`