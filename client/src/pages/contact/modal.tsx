import React from 'react';

interface ModalProps {
  closeModal: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;