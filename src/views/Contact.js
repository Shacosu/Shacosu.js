import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Label = styled.label`
    margin: 20px 0;
    font-weight: bold;
`;

const ContainerStyled = styled(Container)`
    margin: 0 0 150px;
    padding: 0;
`;

const ButtonStyled = styled.button`
    background-color: black;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 12px;
    transition: 50ms;
    width: 80%;
    height: 45px;
    border-radius: 25px;
    margin: auto;
    
    &:hover {
        background-color: white;
        color: black;
    }
`;

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado!');
    }
    return (
        <ContainerStyled fluid className="d-flex justify-content-center align-items-center " id="contact-scroll" >
            <form className="row w-50" >
                <Label htmlFor="emailForm" className="px-0 text-white text-uppercase " ><i className="fas fa-user"></i> Nombre</Label>
                <input type="text" placeholder="Nombre..." name="emailForm" className="p-2 rounded border-0 " />
                <Label htmlFor="emailForm" className="px-0  text-white text-uppercase" ><i className="fas fa-at"></i> Email</Label>
                <input type="text" placeholder="Email..." name="emailForm" className="p-2 rounded border-0" />
                <Label htmlFor="emailForm" className="p-0 px-0 text-white text-uppercase"><i className="fas fa-paperclip"></i> Asunto</Label>
                <input type="text" placeholder="Asunto..." name="emailForm" className="p-2 rounded border-0" />
                <Label htmlFor="emailForm" className="p-0 px-0 text-white text-uppercase"><i className="fas fa-pen"></i> Dejar un mensaje</Label>
                <textarea type="text" placeholder="Mensaje..." name="message" rows="4"  className="p-2 rounded border-0"/>
                <ButtonStyled type="button" onClick={handleSubmit} className="mt-4">Enviar</ButtonStyled>
            <p className="mt-4 text-center text-white">¡Con gusto responderé todas tus dudas y consultas! :)</p>
            </form>
        </ContainerStyled>
    )
}
