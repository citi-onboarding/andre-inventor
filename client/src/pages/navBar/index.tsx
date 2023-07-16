import React from "react";
import { NavBarContainer } from './styles';
import { LogoAndre } from '../../assets';


export const NavBar: React.FC = () => {
    return (
        
        <NavBarContainer>
            <a href = "#"><img src = {LogoAndre} alt = "logo_andre_inventor"/></a>
            <div className = "texto"> 
                <a href = "#" className = "btn b1">Home</a>
                <a href = "#ebook" className = "btn b1">E-book</a>
                <a href = "#about" className = "btn b1">Quem sou</a>
                <a href = "#projects" className = "btn b1">Projetos</a>
                <a href = "#contact" className = "btn b1">Fale comigo</a>
            </div>
        </NavBarContainer>
    );
}