import React, { useState } from 'react';

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
        <Text font="point2" color={theme.colors.white}>
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
  border-radius: 1.4rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  background: var(--deepred, #ff0a00);
  padding: 2rem;
  width: 24rem;
`;
