import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import { Container, Teste } from './style';

import { dotInactive, dotActive } from '../../assets';


export const AboutMe: React.FC = () => {
  return (
    <Container>
        <img alt='test' src='https://i.imgur.com/8uWa9bf.png' className="com"/>
        <img alt='test' src='https://i.imgur.com/oZwHoeo.png' className="etc"/>
        <Teste>
            <h2>Conheça André Inventor!</h2>
            <Carousel 
            showThumbs={false} showStatus={false}
            className="carousel-root"
            renderIndicator={(onClickHandler, isSelected, index, label) => (
                <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`carousel-indicator ${isSelected ? 'active' : 'inactive'}`}
                >
                <img src={isSelected ? dotActive : dotInactive} alt={label} />
                </button>
            )}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow-prev">
                <img width={40} height={30} src="https://i.imgur.com/X8OrIst.png" alt="Seta para a esquerda" />
                </button>
            )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow-next">
                <img width={40} height={30} src="https://i.imgur.com/n0CLB2W.png" alt="Seta para a direita" />
                </button>
            )
            }
        >
            <div>
                <img width={347} height={345} className='first' src="https://i.imgur.com/aPUXtYx.png" alt="Imagem 1" />
                <p className='firstcap'>Sou um recifense, <b>inventor independente</b>, que há 27 anos atua no campo da inovação.
                    Fui estudante de psicologia por um breve período, porque logo percebi que era o inexistente que prendia a minha busca.</p>
                <img width={328} height={426} className='second' src="https://i.imgur.com/1e1KZQZ.png" alt="Imagem 1" />
            </div>
            <div>
                <img width={347} height={345} className='third' src="https://i.imgur.com/aPUXtYx.png" alt="Imagem 1" />
                    <p className='firstcap'>Hoje, graduado em Marketing pela UNIBRA, tenho a certeza que estarei dividindo todo o meu <b>conhecimento e potencial criativo,
                    para multiplicar</b> mundo afora o meu trabalho no universo das ideias e da criatividade.</p>
                <img width={328} height={426} className='second' src="https://i.imgur.com/ZW6Xyju.png" alt="Imagem 1" />
            </div>
            <div>
                <img width={347} height={345} className='third' src="https://i.imgur.com/aPUXtYx.png" alt="Imagem 1" />
                    <p className='secondcap'>Hoje sou também presidente fundador da ONG <b>Instituto Ideias & Ideais 3i</b> e também venho atuando na área social.</p>
                <img width={328} height={426} className='second' src="https://i.imgur.com/lpem4yG.png" alt="Imagem 1" />
            </div>
            <div>
                <img width={334} height={205} className='third' src="https://i.imgur.com/6ZT7Kl1.png" alt="Imagem 1" />
                    <p className='thirdcap'>Observo, penso
                    Imagino, invento<br/>
                    <b>E POR QUE NÃO?</b>
                    </p>
                <img width={328} height={426} className='second' src="https://i.imgur.com/D7n0a1e.png" alt="Imagem 1" />
            </div>
        </Carousel>
        </Teste>
    </Container>
  );
}