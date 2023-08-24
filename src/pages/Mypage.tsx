import Line from '../components/common/Line';
import MypageFeature from '../components/Mypage/MypageFeature';
import MypageHeader from '../components/Mypage/MypageHeader';
import MypageMenu from '../components/Mypage/MypageMenu';
import styled from 'styled-components';

const Mypage = () => {
  return (
    <MypageWrapper>
      <MypageHeader></MypageHeader>
      <MypageFeature></MypageFeature>
      <LineWrapper></LineWrapper>
      <Line></Line>
      <MypageMenu></MypageMenu>
    </MypageWrapper>
  );
};

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LineWrapper = styled.div`
  margin-top: 6.4rem;
`;
export default Mypage;
