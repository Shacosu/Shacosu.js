import React from 'react';
import {  Container } from 'react-bootstrap';
import styled from 'styled-components';


const Img = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 15px 30px;
    cursor: pointer;
    border-radius: 20px 0 20px 0;

    &:hover {
        opacity: 0.3;
    }
`;


export default function Proyect() {
    return (
        <Container className="text-white"  id="proyect-scroll">
            <div className="d-flex justify-content-around ">
                <div className="row">
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                <Img src="https://media.discordapp.net/attachments/857123267835068426/873006455970750474/Latam_Devs.png" alt="" />
                </div>
            </div>
        </Container>
    )
}
