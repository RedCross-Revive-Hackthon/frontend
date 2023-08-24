import { Community, CommunityRed, Event, EventRed, Home, HomeRed, Volunteer, VolunteerRed } from '../icon/icon';

import { IconArea } from '../icon/icon';
import { Link } from 'react-router-dom';
import { PlusBtn } from '../icon/icon';
import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation().pathname;

  return (
    <FooterWrapper>
      <IconContainer>
        <IconSection>
          <Link to="/">{location === '/' ? <HomeRed /> : <Home />}</Link>
          <Link to="/community">{location === '/community' ? <CommunityRed /> : <Community />}</Link>
        </IconSection>
        <IconSection>
          <Link to="/event">{location === '/event' ? <EventRed /> : <Event />}</Link>
          <Link to="/volunteer">{location === '/volunteer' ? <VolunteerRed /> : <Volunteer />}</Link>
        </IconSection>
      </IconContainer>
      <IconArea />
      <Link to="/barcode">
        <StyledPlusBtn />
      </Link>
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
