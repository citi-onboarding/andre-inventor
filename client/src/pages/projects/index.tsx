import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import { Container, Teste } from './style';

import { dotInactive, dotActive, arrow1, arrow2 } from '../../assets';


export const Projects: React.FC = () => {
  return (
    <Container>
            <h3 id='projects'>Nossos projetos</h3>
            <Carousel 
            autoPlay
            showThumbs={false} showStatus={false}
            showIndicators={false}
            className="carousel-root2"
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
                <img width={40} height={30} src={arrow1} alt="Seta para a esquerda" />
                </button>
            )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow-next2">
                <img width={40} height={30} src={arrow2} alt="Seta para a direita" />
                </button>
            )
            }
        >
            <div className='two'>
                <img width={470} height={273} className='slide2' src="https://i.imgur.com/NRNMi4R.png" alt="Imagem 1" />
                <h4>Pista com obstáculos</h4>
                <p className='caption'>Visando o bem estar e melhoria da saúde dos recifenses, desenvolvi, em 1999, uma ideia a ser consolidada na cidade: a Pista com Obstáculos. A invenção consistia em uma pista de corrida/caminhada com alguns obstáculos que
                iriam necessitar de mais esforços dos usuários para serem transpostos; os exercícios aeróbicos, que são grandes aliados para...</p>
                <a className='link' href="url">Ler mais</a>
            </div>
            <div>
            <img width={470} height={273} className='slide2' src="https://i.imgur.com/NRNMi4R.png" alt="Imagem 1" />
                <h4>Pista com obstáculos</h4>
                <p className='caption'>Visando o bem estar e melhoria da saúde dos recifenses, desenvolvi, em 1999, uma ideia a ser consolidada na cidade: a Pista com Obstáculos. A invenção consistia em uma pista de corrida/caminhada com alguns obstáculos que
                iriam necessitar de mais esforços dos usuários para serem transpostos; os exercícios aeróbicos, que são grandes aliados para...</p>
                <a className='link' href="url">Ler mais</a>
            </div>
            <div>
            <img width={470} height={273} className='slide2' src="https://i.imgur.com/NRNMi4R.png" alt="Imagem 1" />
                <h4>Pista com obstáculos</h4>
                <p className='caption'>Visando o bem estar e melhoria da saúde dos recifenses, desenvolvi, em 1999, uma ideia a ser consolidada na cidade: a Pista com Obstáculos. A invenção consistia em uma pista de corrida/caminhada com alguns obstáculos que
                iriam necessitar de mais esforços dos usuários para serem transpostos; os exercícios aeróbicos, que são grandes aliados para...</p>
                <a className='link' href="url">Ler mais</a>
            </div>
            <div>
            <img width={470} height={273} className='slide2' src="https://i.imgur.com/NRNMi4R.png" alt="Imagem 1" />
                <h4>Pista com obstáculos</h4>
                <p className='caption'>Visando o bem estar e melhoria da saúde dos recifenses, desenvolvi, em 1999, uma ideia a ser consolidada na cidade: a Pista com Obstáculos. A invenção consistia em uma pista de corrida/caminhada com alguns obstáculos que
                iriam necessitar de mais esforços dos usuários para serem transpostos; os exercícios aeróbicos, que são grandes aliados para...</p>
                <a className='link' href="url">Ler mais</a>
            </div>
        </Carousel>
    </Container>
  );
}