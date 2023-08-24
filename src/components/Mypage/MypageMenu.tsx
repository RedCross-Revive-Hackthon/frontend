import React from 'react';
import Text from '../common/Text';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MypageMenu = () => {
  return (
    <MypageWrapper>
      <TextWrapper>
        <Text font={'body2'} color={theme.colors.black}>
          레드 커넥트와 연동하기
        </Text>
      </TextWrapper>
      <TextWrapper>
        {' '}
        <Text font={'body2'} color={theme.colors.black}>
          회원 정보 수정
        </Text>
      </TextWrapper>
      <TextWrapper>
        {' '}
        <Text font={'body2'} color={theme.colors.black}>
          공지사항
        </Text>
      </TextWrapper>
      <TextWrapper>
        {' '}
        <Text font={'body2'} color={theme.colors.black}>
          고객센터
        </Text>
      </TextWrapper>
    </MypageWrapper>
  );
};

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  margin-top: 2.4rem;

  width: 33.5rem;
  height: 13.6rem;
`;

const TextWrapper = styled.div``;

export default MypageMenu;
