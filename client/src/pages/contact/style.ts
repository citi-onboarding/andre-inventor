import styled from 'styled-components'; 

export const Container = styled.div`
    display: flex;
    margin-top: 900px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

`;

export const Bac = styled.div`
    background: linear-gradient(0deg, #FDD053 0%, rgba(253, 208, 83, 0.00) 100%);
    width: 100%;
    height: 342px;
    margin-top: -210px;
    z-index: -1;
`;

export const ModalStyle = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: -40px;
    margin-left: -40px;

    width: 770px;
    height: 422px;

    background: rgba(245, 245, 245, 0.5);
    border-radius: 8px;

    z-index: 2;

    .modal-content {
        margin-left: 5px;
        width: 301px;
        height: 214px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;

        padding: 20px;

        border-radius: 8px;
        border: 1px solid var(--yellow-20, rgba(253, 208, 83, 0.20));
        background: var(--white, #FFF);
        box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.15);

        .close {
            padding: 0;
            margin: 0;
            width: 12px;
            height: 12px;
            margin-left: 250px;
        }

        .close:hover {
            padding: 0;
            margin: 0;
            margin-left: 250px;
            background: none;
        }

    }

`;

export const Form = styled.div`
    display: flex;
    margin-top: 100px;

    border-radius: 8px;
    background: var(--degrad-formulrio, linear-gradient(360deg, #FFF 0%, #FDD053 100%));

    width: 770px;
    height: 422px;

    padding: 40px;

    flex-direction: column;

    input, textarea {
        background: transparent;
        margin-bottom: 30px;
        width: 100%;
        height: 40px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1.043px solid var(--black, #000);

        font-family: Sora;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        padding-left: 10px;

    }

    input::placeholder, textarea::placeholder {
        color: black;
        
    }

    textarea:focus, input:focus, select:focus {
        outline: 0;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1.043px solid var(--black, #000);
    }


    div {
        display: flex;
    }

    h1 {
        margin-bottom: 32px;

        color: var(--black, #000);
        font-family: Bitcrusher;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 8px;

        width: 110px;
        height: 50px;

        border: none;
        background: transparent;

        color: black;
        font-family: Sora;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        transition: all 1s ease-in;

    }

    button:hover {
        background: var(--degrad-boto, linear-gradient(135deg, #FDD053 0%, rgba(253, 208, 83, 0.00) 100%));

    }

    .mdal {
        display: flex;
        text-align: center;
        flex-direction: column;

        h1 {
            color: var(--black, #000);
            text-align: center;
            font-family: Sora;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;

            margin-top: 8px;
            margin-bottom: 8px;
        }

        p {
            color: var(--black-40, rgba(0, 0, 0, 0.40));
            text-align: center;
            font-family: Sora;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            margin: 0;
            padding: 0;
        }
    }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 270px;
    height: 276px;
    justify-content: space-between;

    button {
        width: 100%;

        border-radius: 8px;
        background: var(--degrad-boto-2, linear-gradient(135deg, rgba(253, 208, 83, 0.20) 0%, #FDD053 100%));
        box-shadow: 0px 0.8100000023841858px 3.25px 0px rgba(0, 0, 0, 0.06);
        border: none;

        padding-left: 48px;
        padding-right: 48px;
        padding-top: 16px;
        padding-bottom: 16px;

        color: black;
        font-family: Sora;
        font-size: 19px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        transition: 0.6s;
    }

    button:hover {
        color: white;
        background: var(--degrad-boto-3, linear-gradient(135deg, #FDD053 0%, rgba(253, 208, 83, 0.20) 100%));
        box-shadow: 0px 0.8100000023841858px 3.25px 0px rgba(0, 0, 0, 0.06);
    }
`;