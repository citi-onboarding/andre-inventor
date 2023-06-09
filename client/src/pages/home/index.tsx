import React from "react";
import { HomeContainer } from './styles';
import { lightbulb, rocket, megaphone, trophy ,thought ,swirl ,swirlLeft, magic_wand, Arrow } from '../../assets';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring'

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


      const slideDown = useSpring({
        from: { marginTop: -100 },
        to: { marginTop: 0 },
        config: { tension: 200, friction: 20 },
        loop: { reverse: true },
      });
    return (
        <HomeContainer>
            <div style={{ height: 300 }} className = "seta">
                <animated.img
                    src={Arrow}
                    alt="Imagem"
                    style={{
                    width: '100%',
                    height: 'auto',
                    ...slideDown,
                    }}
                />
            </div>
            
            {data && (
            <>
                <h1 className="titulo">{data}</h1>
            </>
            )}
            <h1 className = "titulo">Conectando pessoas através da inteligência criativa</h1>
            <p>Podemos ser <b>cocriadores</b> das nossas ideias<br/>Vem pra cá!</p>
            <img className = "light" src = { lightbulb }/>
            <img className = "trophy" src = { trophy }/>
            <img className = "thought" src = { thought }/>
            <img className = "swirl" src = { swirl }/>
            <img className = "swirlLeft" src = { swirlLeft }/>
            <img className = "magic_wand" src = { magic_wand }/>
            <img className = "megaphone" src = { megaphone }/>
            <img className = "rocket" src = { rocket }/>
            <p className = "rolar">Role para Baixo</p>
            
        </HomeContainer>
    );
}