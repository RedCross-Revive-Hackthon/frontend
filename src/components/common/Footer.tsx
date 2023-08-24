import { Community, Event, Home, Volunteer } from '../icon/icon';

import { IconArea } from '../icon/icon';
import { PlusBtn } from '../icon/icon';
import React from 'react';
import Text from './Text';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <IconContainer>
        <IconSection>
          <Home />
          <Community />
        </IconSection>
        <IconSection>
          <Event />
          <Volunteer />
        </IconSection>
      </IconContainer>

      <IconArea />
      <StyledPlusBtn />
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 37.5rem;
`;

const StyledPlusBtn = styled(PlusBtn)`
  position: absolute;
  bottom: 5.3rem;
  left: 50%;
  transform: translate(-3.7rem, 0);
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 2rem;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  width: 100%;
`;
const IconSection = styled.section`
  display: flex;
  gap: 1.9rem;
  align-items: center;
  justify-content: space-between;
`;
