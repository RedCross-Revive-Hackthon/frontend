import { Down, Up } from '../icon/icon';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { DefaultUser } from '../icon/icon';
import Text from '../common/Text';
import hideName from '../../utils/hideName';
import { modalContentState } from '../../states/modalContentState';
import { modalState } from '../../states/modalState';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export interface RankProps {
  name: string;
  department: string;
  score: number;
  rank: number;
  state: 'up' | 'down';
}
const Rank = ({ name, department, score, rank, state }: RankProps) => {
  const [modalOn, setModalOn] = useRecoilState(modalState);
  const setModalContent = useSetRecoilState(modalContentState);

  const handleModal = () => {
    setModalOn(!modalOn);
    setModalContent({
      rank: rank,
      name: name,
      department: department,
      score: score,
      state: state,
    });
  };

  return (
    <RankWrapper onClick={handleModal}>
      <LeftSide>
        <Text font="head1" color={theme.colors.deepred}>
          {rank}
        </Text>
        <SmallDefaultUser />
        <NameDepartmentInfo>
          <Text font="name1" color={theme.colors.black}>
            {hideName(name)}
          </Text>
          <Text font="univ2" color={theme.colors.gray01}>
            {department}
          </Text>
        </NameDepartmentInfo>
      </LeftSide>
      <RightSide>
        <Text font="point3" color={theme.colors.black}>
          {score.toLocaleString()}점
        </Text>
        {state === 'up' ? <Up /> : <Down />}
      </RightSide>
    </RankWrapper>
  );
};

export default Rank;

const RankWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  padding: 1.4rem;
  padding-left: 2.6rem;
  width: 100%;
`;

const SmallDefaultUser = styled(DefaultUser)`
  margin-left: 1.9rem;
  width: 3.6rem;
  height: 3.6rem;
`;

const NameDepartmentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  margin-left: 1.4rem;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
