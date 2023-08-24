import { Instagram, Invite, Trophy } from '../icon/icon';

import Text from '../common/Text';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MypageFeature = () => {
  return (
    <MypageFeatureWrapper>
      <ButtonWrapper>
        <ButtonContainer>
          <Trophy></Trophy>
          <ButtonTextWrapper>
            <Text font={'body7'} color={theme.colors.orange02}>
              점수 부여 안내
            </Text>
          </ButtonTextWrapper>
        </ButtonContainer>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonContainer>
          {' '}
          <Instagram></Instagram>
          <ButtonTextWrapper>
            <Text font={'body7'} color={theme.colors.orange}>
              SNS 공유
            </Text>
          </ButtonTextWrapper>
        </ButtonContainer>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonContainer>
          <Invite></Invite>{' '}
          <ButtonTextWrapper>
            <Text font={'body7'} color={theme.colors.orange04}>
              친구 초대
            </Text>
          </ButtonTextWrapper>
        </ButtonContainer>
      </ButtonWrapper>
    </MypageFeatureWrapper>
  );
};

const MypageFeatureWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 30.8rem;
  gap: 0.9rem;
  justify-content: space-between;
  width: 34.5rem;
  height: 10.3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  width: 10.6rem;
  height: 10.3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  align-items: center;
  justify-content: space-between;
`;

const ButtonTextWrapper = styled.div``;
export default MypageFeature;
