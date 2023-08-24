//Modal.js

import { Close } from '../icon/icon';
import React from 'react';
import Text from '../common/Text';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <ModalWrapper>
      <Content>
        <Title>
          <StyledClose onClick={onClose} />
          <Text font="body2" color={theme.colors.black}>
            점수 현황
          </Text>
        </Title>
        <Main>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              헌혈
            </Text>
            <Text font="body5" color={theme.colors.black}>
              600점
            </Text>
          </DetailOneLine>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              헌혈 증서 나눔
            </Text>
            <Text font="body5" color={theme.colors.black}>
              150점
            </Text>
          </DetailOneLine>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              지정 헌혈
            </Text>
            <Text font="body5" color={theme.colors.black}>
              500점
            </Text>
          </DetailOneLine>
          <DetailOneLine>
            <Text font="body5" color={theme.colors.black}>
              커뮤니티
            </Text>
            <Text font="body5" color={theme.colors.black}>
              20점
            </Text>
          </DetailOneLine>
        </Main>
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

  padding: 0 2.8rem;
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

const Title = styled.div``;

const Main = styled.main``;

const DetailOneLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
