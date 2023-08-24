//Modal.js

import { Close } from '../icon/icon';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <ModalWrapper>
      <Content>
        <StyledClose onClick={onClose} />
      </Content>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  display: flex;

  position: fixed;
  align-items: center;
  justify-content: center;
  width: 33.5rem;
`;

const Content = styled.aside`
  position: fixed;
  border-radius: 1.4rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background-color: ${theme.colors.white};
  width: 28rem;
  height: 36rem;
`;

const StyledClose = styled(Close)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
`;
