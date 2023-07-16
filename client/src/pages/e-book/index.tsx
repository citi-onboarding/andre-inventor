import React from "react";
import { Container, EBookContainer } from './styles';
import { Phone } from '../../assets';
export const EBook: React.FC = () => {
    return (
        <Container>
            <EBookContainer>
                <img src= { Phone } alt="phone_with_ebook" />
                <h1>E POR QUE NÃO?</h1>
                <h2>Desbloqueie sua criatividade!</h2>
                <p>Um E-book que contém “fórmulas” para despertar e estimular a <b>CRIATIVIDADE</b> e fazer com que você tenha IDEIAS <b>INCRÍVEIS</b> para melhorar a sua vida e também a de outras pessoas.<br/><br/> Resolvendo problemas com uma <b>IDEIA</b> de grande alcance! Você pode até se tornar uma pessoa milionária, feliz e realizada.<br/><br/> Encontre a sua “fórmula”, viva a sua história. <br/><br/>
                <b>VEM PRA CÁ!</b></p>
                <a target="_blank" href="https://hotmart.com/pt-br/marketplace/produtos/e-por-que-nao/U79727696B" className= "btn b1" rel="noreferrer">Comprar E-book</a>
            </EBookContainer>
        </Container>
    );
}