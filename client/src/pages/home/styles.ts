import styled from 'styled-components'; 


export const HomeContainer = styled.div`
  display:flex;
  flex-direction: column;
  font-family: 'Sora', sans-serif;
  width: 100vw;
  top: 130px;
  text-align: center;
  align-items: center;
  height: 100vh;
  position: fixed;
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
    max-width: 770px;
    font-family: 'Bitcrusher', sans-serif;
    position: relative;
    text-align: center;
  }
  p{
    position: relative;
    top: 30px;
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
    position: absolute;
    width: 128px;
    height: 36px;
    right: 604.28px;
    top: 442px;

    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;
    /* identical to box height, or 222% */

    display: flex;
    align-items: center;

    /* Black 40 */

    color: rgba(0, 0, 0, 0.4);
  }
`;