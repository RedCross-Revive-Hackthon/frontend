import React, { useState } from 'react';

import BarCodeScanner from 'barcode-react-scanner';
import { styled } from 'styled-components';

const BarcodeCamera = (): JSX.Element => {
  const [code, setCode] = useState<string>('');

  return (
    <BarcodeWrapper>
      <BarCodeScanner
        onUpdate={(err, resp): void => {
          if (resp) {
            setCode(resp.getText());
          }
          if (err) console.log(err);
        }}
      />
      <Test>{code}</Test>
    </BarcodeWrapper>
  );
};

export default BarcodeCamera;
const Test = styled.span`
  font-size: 2rem;
`;

const BarcodeWrapper = styled.div`
  margin-top: 3rem;
  text-align: center;
  video {
    width: 100%;
  }
`;
