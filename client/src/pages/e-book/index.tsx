import React from "react";
import { EBookContainer } from './styles';
import { Phone } from '../../assets';
export const EBook: React.FC = () => {
    return (
        <EBookContainer>
            <img src= { Phone } alt="phone_with_ebook" />
            <h1>E POR QUE NÃO?</h1>
            <h2>Desbloqueie sua criatividade!</h2>
            <p>Um E-book que contém “fórmulas” para despertar e estimular a CRIATIVIDADE e fazer com que você tenha IDEIAS INCRÍVEIS para melhorar a sua vida e também a de outras pessoas.<br/><br/> Resolvendo problemas com uma IDEIA de grande alcance! Você pode até se tornar uma pessoa milionária, feliz e realizada.<br/><br/> Encontre a sua “fórmula”, viva a sua história. <br/>
            VEM PRA CÁ!</p>
            <a href="#" className = "btn b1">Comprar E-book</a>
        </EBookContainer>
    );
}