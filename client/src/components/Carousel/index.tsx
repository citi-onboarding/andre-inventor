import React from 'react';
import { ContainerPage, ImageText, OutputImage, CarouselStyled, OutputBaloon } from './style';
import { andre1, andre2, andre3, andre4, balao, balao2 } from '../../assets'

export const Carousel = () => {
  const storyArray = [
    {
      image: andre1,
      baloon: balao,
      text: 'Sou um recifense, inventor independente, que há 27 anos atua no campo da inovação. Fui estudante de psicologia por um breve período, porque logo percebi que era o inexistente que prendia a minha busca.',
    },
    {
      image: andre2,
      baloon: balao,
      text: 'Hoje, graduado em Marketing pela UNIBRA, tenho a certeza que estarei dividindo todo o meu conhecimento e potencial criativo, para multiplicar mundo afora o meu trabalho no universo das ideias e da criatividade.',
    },
    {
      image: andre3,
      baloon: balao,
      text: 'Hoje sou também presidente fundador da ONG Instituto Ideias & Ideais 3i e também venho atuando na área social.',
    },
    {
      image: andre4,
      baloon: balao2,
      text: 'Observo, penso Imagino, invento E POR QUE NÃO?',
    },
  ];

  return (
    <CarouselStyled>
      {storyArray.map((item, index) => (
        <ContainerPage key={index}>
          <OutputBaloon
            src={item.baloon}
            alt='Imagem gerada'
          />
          <OutputImage
            src={item.image}
            alt='Imagem gerada'
          />
  
          <ImageText>{item.text}</ImageText>
        </ContainerPage>
      ))}
    </CarouselStyled>
  );
};