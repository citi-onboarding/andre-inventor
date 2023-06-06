import React from "react";
import { HomeContainer } from './styles';
import { lightbulb } from '../../assets';
import { trophy } from '../../assets';
import { thought } from '../../assets';
import { swirl } from '../../assets';
import { swirlLeft } from '../../assets';
import { magic_wand } from '../../assets';
import { megaphone } from '../../assets';
import { rocket } from '../../assets';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <h1 className = "titulo">
                Conectando pessoas através da inteligência criativa
            </h1>
            <p>Podemos ser <b>cocriadores</b> das nossas ideias</p>
            <p>Vem pra cá!</p>
            <img className = "light" src = { lightbulb }/>
            <img className = "trophy" src = { trophy }/>
            <img className = "thought" src = { thought }/>
            <img className = "swirl" src = { swirl }/>
            <img className = "swirlLeft" src = { swirlLeft }/>
            <img className = "magic_wand" src = { magic_wand }/>
            <img className = "megaphone" src = { megaphone }/>
            <img className = "rocket" src = { rocket }/>
        </HomeContainer>
    );
}