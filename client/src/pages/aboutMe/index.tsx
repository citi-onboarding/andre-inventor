import React from "react";
import { AboutMeContainer } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { LogoCITi } from "../../assets";
import { andre1 } from "../../assets";

export const AboutMe: React.FC = () => {
    return (
        <AboutMeContainer>
            <h1>Conheça André Inventor</h1>
            <div className = "back"></div>
            <Carousel className = "carousel">
                <div className = "divi">
                    <img src={ andre1 } alt="Imagem 1" className="andre" />
                    <p>Legenda 1</p>
                </div>
                <></>
            </Carousel>
        </AboutMeContainer>
    );
}