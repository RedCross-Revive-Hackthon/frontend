import { DefaultUser } from '../icon/icon';
import React from 'react';
import Text from '../common/Text';
import { Up } from '../icon/icon';
import hideName from '../../utils/hideName';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

interface RankProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  name: string;
  department: string;
  score: number;
  rank: number;
  state: string;
}
const Rank = ({ onClick, name, department, score, rank }: RankProps) => {
  return (
    <RankWrapper onClick={onClick}>
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
        <Up />
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
