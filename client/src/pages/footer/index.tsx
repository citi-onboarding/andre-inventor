import React from "react";
import { FooterContainer } from "./style";
import { instagram, facebook, LogoBranco, citi } from '../../assets';

export const Footer: React.FC = () => {
    return (
        
        <FooterContainer>
            <div className = "preto">
                <p>Meu objetivo é conectar pessoas através da imaginação criativa.</p>
                <img src={ LogoBranco } alt="white_logo" className="LogoBranco"/>
                <a target="_blank" href = "https://www.instagram.com/andreinventor/"><img src={ instagram } alt="instagram_logo" className="instagram"/></a>
                <a target="_blank" href = 'https://www.facebook.com/andre.freire.3551/'><img src={ facebook } alt="facebook_logo" className="facebook"/></a>
            </div>
            <div className="branco">
            <p className="pciti">
                Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&hearts;</strong>
                {' '}
                by 
            </p>
            <img src={ citi } alt="logo_citi" className="citi"/>
            </div>
        </FooterContainer>
    );
}