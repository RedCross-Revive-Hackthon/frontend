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
    </>
  );
};

export default Barcode;

const BarcodeTitle = styled.div`
  margin-top: 10rem;
`;
