import { IconArea } from '../icon/icon';
import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <IconArea />
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
`;
