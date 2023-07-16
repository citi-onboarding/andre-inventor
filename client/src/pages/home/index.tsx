import React from "react";
import { HomeContainer, Text } from './styles';
import { lightbulb, rocket, megaphone, trophy ,thought ,swirl ,swirlLeft, magic_wand } from '../../assets';

export const Home: React.FC = () => {

    return (
        <HomeContainer>
            <Text>
              <h1 className = "titulo">Conectando pessoas através da inteligência criativa</h1>
              <p>Podemos ser <b>cocriadores</b> das nossas ideias<br/>Vem pra cá!</p>
            </Text>
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