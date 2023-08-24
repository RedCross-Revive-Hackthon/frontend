import BarcodeCamera from '../components/barcode/BarcodeCamera';
import { Link } from 'react-router-dom';
import { Logo } from '../components/icon/icon';
import Text from '../components/common/Text';
import mypageBackgroundImg from '../assets/svgs/mypageBackgroundImg.png';
import { styled } from 'styled-components';
import { theme } from '../styles/theme';

const Barcode = () => {
  return (
    <BarcodeWrapper>
      <BarcodeTitle>
        <Logo />
        <Text font="head1" color={theme.colors.black}>
          헌혈증서의 바코드를 인식해주세요.
        </Text>
      </BarcodeTitle>
      <BarcodeCamera />
      <Link to="/certification">
        <ConfirmBtn>
          <Text font="point2" color={theme.colors.white}>
            헌혈증서 등록하기
          </Text>
        </ConfirmBtn>
      </Link>
    </BarcodeWrapper>
  );
};

export default Barcode;

const BarcodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${mypageBackgroundImg});
  padding-top: 2.4rem;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 37.5rem;
  height: 37.2rem;
  text-align: center;
`;

const BarcodeTitle = styled.div`
  span {
    color: ${theme.colors.white};
  }
`;

const ConfirmBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  border-radius: 1.4rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  background: var(--deepred, #ff0a00);
  padding: 2rem;
  width: 24rem;
`;
