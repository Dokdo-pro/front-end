import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;

  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  
`;

interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>{children}</ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
