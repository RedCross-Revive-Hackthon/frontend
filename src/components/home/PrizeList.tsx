import { DefaultUser, FirstPlace, SecondPlace, ThirdPlace } from '../icon/icon';

import Text from '../common/Text';
import hideName from '../../utils/hideName';
import { modalContentState } from '../../states/modalContentState';
import { modalState } from '../../states/modalState';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { useSetRecoilState } from 'recoil';

const PRIZE_LIST = [
  {
    name: '심은서',
    department: '아트&테크놀로지학과',
    score: 15800,
    rank: 2,
  },
  {
    name: '서지원',
    department: '디자인조형학부',
    score: 28000,
    rank: 1,
  },
  {
    name: '윤서영',
    department: '컴퓨터정보공학과',
    score: 11200,
    rank: 3,
  },
];

const PrizeList = () => {
  const [modalOn, setModalOn] = useRecoilState(modalState);
  const setModalContent = useSetRecoilState(modalContentState);
  const handleModal = () => {
    setModalOn(!modalOn);
  };

  const setSecondPlaceContent = () => {
    setModalContent({
      rank: 2,
      name: '심은서',
      department: '아트&테크놀로지학과',
      score: 15800,
      state: 'up',
    });
  };

  const setFirstPlaceContent = () => {
    setModalContent({
      rank: 1,
      name: '서채원',
      department: '디자인조형학부',
      score: 15800,
      state: 'up',
    });
  };

  const setThirdPlaceContent = () => {
    setModalContent({
      rank: 1,
      name: '윤서영',
      department: '컴퓨터정보공학과',
      score: 11200,
      state: 'up',
    });
  };

  return (
    <PrizeListWrapper>
      <SecondPlaceWrapper
        onClick={() => {
          handleModal();
          setSecondPlaceContent();
        }}>
        <SecondPlace />
        <UserScoreInfo>
          <SmallDefaultUser />
          <Text font="name2" color={theme.colors.black}>
            {hideName(PRIZE_LIST.find((item) => item.rank === 2)?.name)}
          </Text>
          <Text font="univ2" color={theme.colors.gray01}>
            {PRIZE_LIST.find((item) => item.rank === 2)?.department}
          </Text>
          <Text font="point2" color={theme.colors.black}>
            {PRIZE_LIST.find((item) => item.rank === 2)?.score?.toLocaleString()}
          </Text>
        </UserScoreInfo>
      </SecondPlaceWrapper>
      <FirstPlaceWrapper
        onClick={() => {
          handleModal();
          setFirstPlaceContent();
        }}>
        <FirstPlace />
        <UserScoreInfo>
          <DefaultUser />
          <Text font="name2" color={theme.colors.black}>
            {hideName(PRIZE_LIST.find((item) => item.rank === 1)?.name)}
          </Text>
          <Text font="univ2" color={theme.colors.gray01}>
            {PRIZE_LIST.find((item) => item.rank === 1)?.department}
          </Text>
          <Text font="point2" color={theme.colors.black}>
            {PRIZE_LIST.find((item) => item.rank === 1)?.score?.toLocaleString()}
          </Text>
        </UserScoreInfo>
      </FirstPlaceWrapper>
      <ThirdPlaceWrapper
        onClick={() => {
          handleModal();
          setThirdPlaceContent();
        }}>
        <ThirdPlace />
        <UserScoreInfo>
          <SmallDefaultUser />
          <Text font="name2" color={theme.colors.black}>
            {hideName(PRIZE_LIST.find((item) => item.rank === 3)?.name)}
          </Text>
          <Text font="univ2" color={theme.colors.gray01}>
            {PRIZE_LIST.find((item) => item.rank === 3)?.department}
          </Text>
          <Text font="point2" color={theme.colors.black}>
            {PRIZE_LIST.find((item) => item.rank === 3)?.score?.toLocaleString()}
          </Text>
        </UserScoreInfo>
      </ThirdPlaceWrapper>
    </PrizeListWrapper>
  );
};

export default PrizeList;

const PrizeListWrapper = styled.main`
  display: flex;
  gap: 0.4rem;
  align-items: end;
  margin-top: 2.4rem;
  cursor: pointer;
`;

const FirstPlaceWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: pointer;
`;

const SecondPlaceWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: pointer;
`;

const ThirdPlaceWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const UserScoreInfo = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  transform: translate(-50%, -50%);
  margin-top: 0.8rem;
  width: 100%;
`;

const SmallDefaultUser = styled(DefaultUser)`
  width: 4.8rem;
`;
