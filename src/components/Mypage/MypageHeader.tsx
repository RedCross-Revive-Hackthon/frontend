import { BtnAlarm, DefaultProfileImg, IcnRank, IcnScore } from '../icon/icon';

import Text from '../common/Text';
import mypageBackgroundImg from '../../assets/svgs/myPageBackgroundImg.png';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MypageHeader = () => {
  return (
    <MypageHeaderWrapper>
      <MyInfoWrapper>
        <MyInfoContainer>
          <DefaultProfileImg />
          <MyInfoSection>
            <NameWrapper>
              <Text font="head4" color={theme.colors.white}>
                적십자
              </Text>
            </NameWrapper>
            <MajorWrapper>
              <Text font={'univ1'} color={theme.colors.white}>
                적십자 대학교
              </Text>
            </MajorWrapper>
            {/* head4로 추후에 변경해야함 */}
          </MyInfoSection>
        </MyInfoContainer>
        <AlarmWrapper></AlarmWrapper>
      </MyInfoWrapper>
      <ScoreWrapper>
        <ScoreContainer>
          <ScoreSection>
            <IcnScore></IcnScore>
            <ScoreTextWrapper>
              <Text font={'body3'} color={theme.colors.white}>
                누적점수
              </Text>
            </ScoreTextWrapper>
          </ScoreSection>
          <ScoreTextWrapper>
            <Text font={'head5'} color={theme.colors.white}>
              8,240
            </Text>
          </ScoreTextWrapper>
        </ScoreContainer>
        <Line></Line>
        <ScoreContainer>
          <ScoreSection>
            <IcnRank></IcnRank>
            <ScoreTextWrapper>
              <Text font={'body3'} color={theme.colors.white}>
                현재순위
              </Text>
            </ScoreTextWrapper>
          </ScoreSection>
          <ScoreTextWrapper>
            <Text font={'body4'} color={theme.colors.white}>
              37등
            </Text>
          </ScoreTextWrapper>
        </ScoreContainer>
      </ScoreWrapper>
    </MypageHeaderWrapper>
  );
};

const MypageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${mypageBackgroundImg});
  padding-top: 2.4rem;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 37.5rem;
  height: 37.2rem;
`;

const MyInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MyInfoContainer = styled.div`
  display: flex;
`;
const MyInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.4rem;
  width: 15rem;
  height: 7.2rem;
`;
const NameWrapper = styled.div``;

const MajorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.4rem;
  border-radius: 10rem;
  background: rgba(255, 255, 255, 0.5);
  width: 12rem;
  height: 2.2rem;
`;

const AlarmWrapper = styled(BtnAlarm)``;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5.1rem;
  height: 9rem;
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 33.5rem;
  height: 2.4rem;
`;
const ScoreSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.5rem;
  height: 2.4rem;
`;

const ScoreTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.hr`
  opacity: 0.5;
  width: 33.5rem;
  stroke-width: 1px;
  stroke: var(--white, #fff);
`;

export default MypageHeader;
