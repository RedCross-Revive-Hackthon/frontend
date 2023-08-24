import BarcodeCamera from '../components/barcode/BarcodeCamera';
import Text from '../components/common/Text';
import { styled } from 'styled-components';
import { theme } from '../styles/theme';

const Barcode = () => {
  return (
    <>
      <BarcodeTitle>
        <Text font="head1" color={theme.colors.black}>
          바코드를 인식해주세요.
        </Text>
      </BarcodeTitle>
      <BarcodeCamera />
      <ConfirmBtn>
        <Text font="point1" color={theme.colors.white}>
          인식 완료
        </Text>
      </ConfirmBtn>
    </>
  );
};

export default Barcode;

const BarcodeTitle = styled.div`
  margin-top: 10rem;
`;

const ConfirmBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  border-radius: 2rem;
  background: ${theme.colors.black};
  padding: 2rem;
  width: 24rem;
`;
