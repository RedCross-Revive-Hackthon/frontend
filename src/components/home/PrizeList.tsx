import { FirstPlace, SecondPlace, ThirdPlace } from '../icon/icon';

import React from 'react';
import { styled } from 'styled-components';

const PRIZE_LIST = [];

const PrizeList = () => {
  return (
    <PrizeListWrapper>
      <SecondPlaceWrapper>
        <SecondPlace />
      </SecondPlaceWrapper>
      <FirstPlaceWrapper>
        <FirstPlace />
      </FirstPlaceWrapper>
      <ThirdPlaceWrapper>
        <ThirdPlace />
      </ThirdPlaceWrapper>
    </PrizeListWrapper>
  );
};

export default PrizeList;

const PrizeListWrapper = styled.main`
  display: flex;
  align-items: end;
`;

const FirstPlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondPlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThirdPlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
