import React from "react";
import { AboutMeContainer } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from '../../components/Carousel';
import { LogoCITi } from "../../assets";
import { andre1 } from "../../assets";

export const AboutMe: React.FC = () => {
    return (
        <AboutMeContainer>
            <h1>Conheça André Inventor</h1>
            <Carousel/>
        </AboutMeContainer>
    );
}