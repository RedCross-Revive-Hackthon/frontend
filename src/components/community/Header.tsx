import Text from '../common/Text';
import { communityTapState } from '../../states/communityTapState';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { useRecoilState } from 'recoil';

const Header = () => {
  const [currentTap, setCurrentTap] = useRecoilState(communityTapState);

  const handleTap = () => {
    setCurrentTap(!currentTap);
  };

  return (
    <HeaderWrapper>
      <HeaderTap onClick={handleTap} $isCurrentTap={currentTap === false}>
        {currentTap === false ? (
          <Text font="head5" color={theme.colors.black}>
            헌혈증서 나눔
          </Text>
        ) : (
          <Text font="head5" color={theme.colors.gray01}>
            헌혈증서 나눔
          </Text>
        )}
      </HeaderTap>
      <HeaderTap onClick={handleTap} $isCurrentTap={currentTap === true}>
        {currentTap === true ? (
          <Text font="head5" color={theme.colors.black}>
            지정헌혈 구인
          </Text>
        ) : (
          <Text font="head5" color={theme.colors.gray01}>
            지정헌혈 구인
          </Text>
        )}
      </HeaderTap>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  position: absolute;
  margin-top: 1.2rem;
  width: 100%;
`;

const HeaderTap = styled.div<{ $isCurrentTap: boolean }>`
  display: flex;
  justify-content: center;
  border-bottom: 0.2rem solid ${(props) => (props.$isCurrentTap ? theme.colors.deepred : theme.colors.gray01)};
  cursor: pointer;
  width: 100%;
  height: 5.6rem;
`;
