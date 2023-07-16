import styled from 'styled-components'; 


export const HomeContainer = styled.div`
  display:flex;
  flex-direction: column;
  font-family: 'Sora', sans-serif;
  width: 100%;
  top: 130px;
  text-align: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  background: linear-gradient(180deg, #FDD053 0%, rgba(253, 208, 83, 0) 100%, white);
  justify-content: center;

  h1{
    margin-top: -300px;
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 96px;
    color: #000000;
  }
  .titulo{
    font-family: 'Bitcrusher', sans-serif;
    position: relative;
    text-align: center;
    padding-bottom: 25px; 
  }
  p{
    position: relative;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;

    color: rgba(0, 0, 0, 0.6);

  }
  b{
    color: black;
  }
  .light{
    position: absolute;
    left: 30px;
    top: 17.49px;
  }
  .trophy{
    position: absolute;
    top: 214px;
    left: 80px;
  }
  .thought{
    position: absolute;
    top: 221.13px;
    right: 213px; 
  }
  .swirl{
    position: absolute;
    top: 101px;
    right: 57px;
  }
  .swirlLeft{
    position: absolute;
    top: 154px;
    left: 170px;
  }
  .magic_wand{
    position: absolute;
    top: -26px;
    right: 110px;
  }
  .megaphone{
    position: absolute;
    top: 204px;
    left:25px;
  }
  .rocket{
    position: absolute;
    top: 213px;
    right:52px;
  }
  .seta{
    position: absolute;
    left:540px;
    top: 485px;
  }
  .rolar{

    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;

    color: rgba(0, 0, 0, 0.4);

    margin-top: 50px;
  }
`;

export const Text = styled.div`

    display: flex;
    text-align: center;
    flex-direction: column;
    width: 770px;

    @media (max-width: 1400px) {
      margin-top: 150px;
    }

`;