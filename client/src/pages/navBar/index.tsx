import React from "react";
import { NavBarContainer } from './styles';
import { LogoAndre } from '../../assets';


export const NavBar: React.FC = () => {
    return (
        
        <NavBarContainer>
            <img src = {LogoAndre} alt = "logo_andre_inventor"/>
            <div className = "texto"> 
                <a href = "#" className = "btn b1">Home</a>
                <a href = "#" className = "btn b1">E-book</a>
                <a href = "#" className = "btn b1">Quem sou</a>
                <a href = "#" className = "btn b1">Projetos</a>
                <a href = "#" className = "btn b1">Fale comigo</a>
            </div>
        </NavBarContainer>
    );
}