import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  
`;

export const ImageText = styled.p`
  
    position: absolute;
    width: 247px;
    height: 160px;
    left: 164px;
    top: 223px;

    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: right;

    color: #000000;
`;

export const OutputImage = styled.img`
    position: absolute;
    display: flex;
    left: 518px;
    top: 0px;
  
`;
export const OutputBaloon = styled.img`
    position: absolute;
    left: 135px;
    top: 150px;
    border-radius: 0px;

  `;

export const CarouselStyled = styled(Carousel)`
  top: 60px;
  height: 585.7px;
  width: 1025px;
  left: 180px;
  border-radius: 0px;

`;