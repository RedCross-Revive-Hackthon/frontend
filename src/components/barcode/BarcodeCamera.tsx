import BarCodeScanner from 'barcode-react-scanner';
import Text from '../common/Text';
import formatBarcode from '../../utils/formatBarcode';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { useState } from 'react';
const BarcodeCamera = (): JSX.Element => {
  const [code, setCode] = useState<string>('');

  return (
    <BarcodeWrapper>
      <BarCodeScanner
        onUpdate={(err, resp): void => {
          if (resp) {
            setCode(formatBarcode(resp.getText()));
          }
          if (err) console.log(err);
        }}
      />
      <Text font="point1" color={theme.colors.gray01}>
        {code}
      </Text>
    </BarcodeWrapper>
  );
};

export default BarcodeCamera;

const BarcodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  text-align: center;
  video {
    width: 100%;
  }
`;
