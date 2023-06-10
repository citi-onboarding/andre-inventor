import React from "react";
import { AboutMeContainer } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from '../../components/Carousel';
import { balao, laptop, announce } from '../../assets'

export const AboutMe: React.FC = () => {
    return (
        <AboutMeContainer>
            <h1>Conheça André Inventor!</h1>
            <div className= "retangulo"></div>
            <img src={ laptop } className = "laptop" alt="laptop"/>
            <img src = { balao } className= "balao" alt = "thought_balloon"/>
            <img src= { announce } className= "announce" alt="announcement"/>
            <Carousel/>
        </AboutMeContainer>
    );
}