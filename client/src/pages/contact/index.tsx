import React, { useState } from 'react';
import { Bac, Buttons, Container, Content, Form, ModalStyle } from './style';
import axios from 'axios';
import { arrowR, closeX, errorI, ou, sucess } from '../../assets';

interface ModalProps {
    closeModal: () => void;
    children: any;
  }
  
  const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
    return (
      <ModalStyle>
        <div className="modal-content">
          <button className="close" onClick={closeModal}><img width={12} height={12} src={closeX}/></button>
            {children}
        </div>
      </ModalStyle>
    );
  };


export const Contact: React.FC = () => {
    const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false);
    const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      try {
        const formData = new FormData(event.currentTarget);
        
        const payload: { [key: string]: string } = {};
        formData.forEach((value, key) => {
          payload[key] = value.toString();
        });

        await axios.post('http://localhost:3001/email', payload);
  
        setSuccessModalOpen(true);
      } catch (error) {
        setErrorModalOpen(true);
      }
    };
  
    const closeSuccessModal = () => {
      setSuccessModalOpen(false);
    };
  
    const closeErrorModal = () => {
      setErrorModalOpen(false);
    };

  return (
    <Container>
      <h3 id='contact'>Quer saber mais sobre André Inventor?</h3>

      <Content>
      <Buttons>
          <button>Ver Declarações</button>
          <button>Ver Depoimentos</button>
          <button>3i Instituto Ideias e Ideais</button>
        </Buttons>
        <img alt='' style={{marginTop: 100, marginLeft: 45, marginRight: 45}} width={27} height={310} src={ou}/>
        <Form>
          <h1>
            Fale comigo!
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" id="name" required placeholder="Nome" name="name" />
            </div>
            <div>
              <input style={{marginRight: 30}} type="email" id="email" placeholder="E-mail" name="email" />
              <input type="tel" id="phone" placeholder="Telefone" name="phone" />
            </div>
            <div>
              <textarea id="message" required name='message' placeholder="Motivo do contato"></textarea>
            </div>
            <button style={{marginLeft: 590}} type="submit">Enviar<img alt='' style={{marginLeft: 5}} src={arrowR}/></button>
        </form>
        {successModalOpen && (
          <Modal closeModal={closeSuccessModal}>
            <img width={41} alt='' src={sucess}/>
            <div className='mdal'>
              <h1>O formulário foi enviado com sucesso!</h1>
              <p>Em breve André Inventor entrará em contato com você.</p>
            </div>
          </Modal>
        )}

        {errorModalOpen && (
          <Modal closeModal={closeErrorModal}>
            <img width={41} alt='' src={errorI}/>
            <div className='mdal'>
              <h1>Aconteceu um erro!</h1>
              <p>Aconteceu um erro ao tentar enviar o formulário. Tente novamente.</p>
            </div>
          </Modal>
        )}
        </Form>
      </Content>
      <Bac/>
      
    </Container>
  );
}