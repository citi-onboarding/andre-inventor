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
import axios from 'axios';
import { useState, useEffect } from "react";

export const Home: React.FC = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/home');
            setData(response.data.Homes[0].title);
            console.log(response.data.Homes[0].title);
            
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    
      }, []);
    return (
        <HomeContainer>
            
            {data && (
            <>
                <h1 className="titulo">{data}</h1>
            </>
            )}
            
            <p>Podemos ser <b>cocriadores</b> das nossas ideias<br/>Vem pra cá!</p>
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