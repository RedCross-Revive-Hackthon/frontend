import { DefaultProfileImg, MypageBackground } from '../icon/icon';

import Text from '../Text';
import mypageBackgroundImg from '../../assets/svgs/myPageBackgroundImg.png';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MypageHeader = () => {
  return (
    <MypageHeaderWrapper>
      <MyInfoWrapper>
        <DefaultProfileImg></DefaultProfileImg>
        <MyInfoContainer>
          {' '}
          <NameWrapper>
            <Text font={'head3'} color={theme.colors.white}>
              적십자
            </Text>
          </NameWrapper>
          <MajorWrapper>
            <Text font={'univ1'} color={theme.colors.white}>
              적십자 대학교
            </Text>
          </MajorWrapper>
          {/* head4로 추후에 변경해야함 */}
        </MyInfoContainer>
      </MyInfoWrapper>
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
`;

const MyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7.2rem;
`;
const NameWrapper = styled.div`
  margin-left: 1.4rem;
`;

const MajorWrapper = styled.div`
  border-radius: 10rem;
  background: rgba(255, 255, 255, 0.5);
`;
export default MypageHeader;
