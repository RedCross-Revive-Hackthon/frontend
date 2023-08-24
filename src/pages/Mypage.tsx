import MypageHeader from '../components/Mypage/MypageHeader';
import styled from 'styled-components';

const Mypage = () => {
  return (
    <MypageWrapper>
      <MypageHeader></MypageHeader>
    </MypageWrapper>
  );
};

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Mypage;
