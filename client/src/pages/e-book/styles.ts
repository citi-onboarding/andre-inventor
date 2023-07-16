import styled from 'styled-components'; 


export const EBookContainer = styled.div`
    display: flex;
    position: absolute;
    top: 860px;
    width: 1166px;
    height: 520px;
    
    background: linear-gradient(106.76deg, #FDD053 0%, rgba(253, 208, 83, 0.2) 100%);
    border-radius: 8px;

    h1{
        position: relative;
        width: 245px;
        height: 72px;

        font-family: 'Bitcrusher';
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
        left:494px;
        top: 64px;
        color: #000000;
    }
    h2{
        position: absolute;
        width: 367px;
        height: 30px;
        
        font-family: 'Sora';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        left:494px;
        top: 136px;
        color: rgba(0, 0, 0, 0.6);
    }
    p{
        position: absolute;
        left: 494px;
        top: 190px;
        width: 573px;
        height: 180px;

        font-family: 'Sora';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #000000;
    }
    a{
        position: absolute;
        left: 546px;
        top:412px;

        font-family: 'Sora';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        color: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }
    img{
        position: absolute;
        width: 515px;
        height: 515px;

    }
    .hover{
        display: flex;
        flex-direction: row;
        align-items: center;
        background: linear-gradient(106.76deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%);
        box-shadow: 0px 0.81px 3.25px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
      }
      
      .btn{
        line-height: 25px;
        list-style: none;
        color: #000000;
        text-align: center;
        padding:18px 52px;
        text-decoration: none;
        margin: 0 10px;
        
        overflow: hidden;
        &:before{
          content:'';
          position: absolute;
          top: 0%;
          right: 0%;
    
          width:100%;
          height:100%;
          background: linear-gradient(106.76deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%);
          box-shadow: 0px 0.81px 3.25px rgba(0, 0, 0, 0.06);
          border-radius: 8px;
    
          z-index: -1;
          transition: .3s ease;
        }
      }
    
      .b1{
        &:before{
          width: 0;
          height: 100%;
        }
        &:hover{
        color: rgba(0, 0, 0, 0.8);
          &:before{
            width: 100%;
          }
        }
      }
`;

export const Container = styled.div`

  display: flex;
  justify-content: center;

`;