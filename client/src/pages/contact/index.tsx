import React, { useState } from 'react';
import { Bac, Buttons, Container, Content, Form, ModalStyle } from './style';

interface ModalProps {
    closeModal: () => void;
    children: any;
  }
  
  const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
    return (
      <ModalStyle>
        <div className="modal-content">
          <button className="close" onClick={closeModal}><img width={12} height={12} src='https://i.imgur.com/JwLuhEG.png'/></button>
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
        // Simulando o envio do formulário
        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            const success = Math.random() < 0.5; // Simula sucesso ou falha aleatória
            if (success) {
              resolve();
            } else {
              reject();
            }
          }, 2000); // Tempo simulado de envio do formulário
        });
  
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
      <h3>Quer saber mais sobre André Inventor?</h3>

      <Content>
      <Buttons>
          <button>Ver Declarações</button>
          <button>Ver Depoimentos</button>
          <button>3i Instituto Ideias e Ideais</button>
        </Buttons>
        <img alt='' style={{marginTop: 100, marginLeft: 45, marginRight: 45}} width={27} height={310} src='https://i.imgur.com/lHZYhKh.png'/>
        <Form>
          <h1>
            Fale comigo!
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" id="nomeid" placeholder="Nome" name="nome" />
            </div>
            <div>
              <input style={{marginRight: 30}} type="email" id="emailid" placeholder="E-mail" name="email" />
              <input type="tel" id="foneid" placeholder="Telefone" name="fone" />
            </div>
            <div>
              <textarea placeholder="Motivo do contato"></textarea>
            </div>
            <button style={{marginLeft: 590}} type="submit">Enviar<img alt='' style={{marginLeft: 5}} src='https://i.imgur.com/orK9e53.png'/></button>
        </form>
        {successModalOpen && (
          <Modal closeModal={closeSuccessModal}>
            <img width={41} alt='' src='https://i.imgur.com/01kuhCJ.png'/>
            <div className='mdal'>
              <h1>O formulário foi enviado com sucesso!</h1>
              <p>Em breve André Inventor entrará em contato com você.</p>
            </div>
          </Modal>
        )}

        {errorModalOpen && (
          <Modal closeModal={closeErrorModal}>
            <img width={41} alt='' src='https://i.imgur.com/c2QMGe8.png'/>
            <div className='mdal'>
              <h1>Falha!</h1>
              <p>Houve uma falha ao tentar enviar o formulário. Tente novamente.</p>
            </div>
          </Modal>
        )}
        </Form>
      </Content>
      <Bac/>
      
    </Container>
  );
}