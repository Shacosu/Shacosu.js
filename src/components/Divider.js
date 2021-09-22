import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 30%;
    
`;

export default function Divider({ text }) {
    return (
        <div className=" w-100 d-flex justify-content-center align-items-center">
            <Img src="https://media.discordapp.net/attachments/857123267835068426/882009887230541894/pngwing.com.png" alt="leftDivider" />
            <h1 className="text-white mx-4">{text}</h1>
            <Img src="https://media.discordapp.net/attachments/857123267835068426/882009887230541894/pngwing.com.png" alt="rightDivider" />
        </div>
    )
}
