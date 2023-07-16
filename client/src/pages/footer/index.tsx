import React from "react";
import { FooterContainer, White, Content, Div, Img } from "./style";
import { instagram, facebook, LogoBranco, citi } from '../../assets';

export const Footer: React.FC = () => {
    return (
        
        <FooterContainer>
            <Content>
                <Div>
                <img src={ LogoBranco } alt="white_logo"/>
                <p style={{maxWidth: '275px', marginLeft: '35px'}}>Meu objetivo é conectar pessoas através da imaginação criativa.</p>
                </Div>
                <Img>
                <a target="_blank" href = "https://www.instagram.com/andreinventor/" rel="noreferrer"><img src={ instagram } alt="instagram_logo"/></a>
                <a target="_blank" href = 'https://www.facebook.com/andre.freire.3551/' rel="noreferrer"><img src={ facebook } alt="facebook_logo"/></a>
                </Img>
            </Content>
            <White>
                    Made with
                    {' '}
                    <strong >&lt; &#x0002F; &gt;</strong>
                    {' '}
                    and
                    {' '}
                    <strong>&hearts;</strong>
                    {' '}
                    by 
                <img style={{marginLeft: '10px'}} src={ citi } alt="logo_citi"/>
            </White>
        </FooterContainer>
    );
}