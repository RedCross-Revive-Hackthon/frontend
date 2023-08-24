import React from 'react';
import Text from '../common/Text';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

const dummy = {
  university: '적십자대학교',
  name: '홍길동',
  rank: '4',
};

const RankTitle = () => {
  return (
    <RankTitleWrapper>
      <TextWrapper>
        <Text font="head2" color={theme.colors.deepred}>
          {dummy.university}
        </Text>
        <MainTextWrapper>
          <Text font="head1" color={theme.colors.black}>
            {dummy.name}님의 헌혈 랭킹은
          </Text>
          <Text font="head3" color={theme.colors.deepred}>
            {dummy.rank}위
          </Text>
        </MainTextWrapper>
      </TextWrapper>
    </RankTitleWrapper>
  );
};

export default RankTitle;

const RankTitleWrapper = styled.header`
  display: flex;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const MainTextWrapper = styled.h1`
  display: flex;
  gap: 0.6rem;
`;
