import styled from 'styled-components'; 


export const NavBarContainer = styled.div`
  display:flex;
  position: absolute;
  width: 1366px;
  height: 130px;
  left: calc(50% - 1366px/2);
  top: 0px;
  background:#FDD053;
  
  .hover{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    background: linear-gradient(106.76deg, rgba(255, 255, 255, 0.6) 0%, rgba(253, 208, 83, 0) 100%);
    border-radius: 16px;
  }
  
  .btn{
    line-height: 25px;
    list-style: none;
    color: #000000;
    text-align: center;
    padding:10px 26px;
    text-decoration: none;
    margin: 0 10px;

    overflow: hidden;
    

    position: relative;
    &:before{
      content:'';
      position: absolute;
      top: 0%;
      left: 0%;

      width:100%;
      height:100%;
      background: linear-gradient(106.76deg, rgba(255, 255, 255, 0.6) 0%, rgba(253, 208, 83, 0) 100%);
      border-radius: 16px;

      z-index: 0;
      transition: .3s ease;
    }
  }

  .b1{
    &:before{
      width: 0;
      height: 100%;
    }
    &:hover{
      color: white;
      &:before{
        width: 100%;
      }
    }
  }


  .texto{
    margin-right: 110px;
    margin-left: auto;
    display: flex;
    margin-top:42px;
    margin-bottom:42px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  
  img {
    position: absolute;
    width: 178px;
    height: 87.01px;
    left: 100px;
    top: 21px;
  }
`;