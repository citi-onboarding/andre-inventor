import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import { Container, Teste } from './style';
import axios from 'axios';

import { dotInactive, dotActive, arrow1, arrow2 } from '../../assets';


export const Projects: React.FC = () => {

    const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/projects')
      .then(response => {
        setCarouselData(response.data.Projetos);
      })
      .catch(error => {
        console.error('Erro ao obter dados do índice:', error);
      });
  }, []);
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
            {carouselData.map((item: any) => (
                <div className='two' key={item.id}>
                <img width={470} height={273} className='slide2' src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p className="caption">{item.description}</p>
                <a className='link' href={item.link}>Ler mais</a>
                </div>
      ))}
        </Carousel>
    </Container>
  );
}