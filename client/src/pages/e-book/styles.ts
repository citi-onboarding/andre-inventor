import styled from 'styled-components'; 


export const EBookContainer = styled.div`
    display: flex;
    position: absolute;
    top: 860px;
    width: 1166px;
    height: 520px;
    
    background: linear-gradient(106.76deg, #FDD053 0%, rgba(253, 208, 83, 0.2) 100%);
    border-radius: 8px;

    flex-direction: row;

    h1{

        width: 245px;
        height: 72px;

        font-family: 'Bitcrusher';
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
        color: #000000;
    }

    p{
        width: 573px;
        height: 180px;

        font-family: 'Sora';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #000000;
    }
    
    img{
        width: 515px;
        height: 515px;

    }
      
`;

export const Container = styled.div`

  display: flex;
  justify-content: center;

`;

export const SideOne = styled.div`

`;

export const SideTwo = styled.div`

  display: flex;
  flex-direction: column;
  padding-top: 75px;
  padding-bottom: 75px;
  padding-right: 75px;

  h2 {
      margin: 0;
      padding-bottom: 25px;
      font-family: 'Sora';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: rgba(0, 0, 0, 0.6);
  }

  button {
    border-radius: 8px;
    background: var(--degrad-boto-2, linear-gradient(135deg, rgba(253, 208, 83, 0.20) 0%, #FDD053 100%));
    box-shadow: 0px 0.8100000023841858px 3.25px 0px rgba(0, 0, 0, 0.06);
    border: none;
    width: 277px;
    height: 62px;

    color: black;
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-top: 25px;

    transition: 0.5s;
  }

  button:hover {
    color: white;
    border-radius: 8px;
    background: var(--degrad-boto-3, linear-gradient(135deg, #FDD053 0%, rgba(253, 208, 83, 0.20) 100%));
    box-shadow: 0px 0.8100000023841858px 3.25px 0px rgba(0, 0, 0, 0.06);
  }

`;