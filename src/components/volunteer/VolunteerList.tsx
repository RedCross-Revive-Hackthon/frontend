import React from 'react';
import Volunteer1 from '../../assets/images/volunteer1.png';
import Volunteer2 from '../../assets/images/volunteer2.png';
import Volunteer3 from '../../assets/images/volunteer3.png';
import Volunteer4 from '../../assets/images/volunteer4.png';
import Volunteer5 from '../../assets/images/volunteer5.png';
import Volunteer6 from '../../assets/images/volunteer6.png';
import Volunteer7 from '../../assets/images/volunteer7.png';
import Volunteer8 from '../../assets/images/volunteer8.png';
import { styled } from 'styled-components';
const VolunteerList = () => {
  return (
    <VolunteerListWrapper>
      <StyledImage src={Volunteer1} />
      <StyledImage src={Volunteer2} />
      <StyledImage src={Volunteer3} />
      <StyledImage src={Volunteer4} />
      <StyledImage src={Volunteer5} />
      <StyledImage src={Volunteer6} />
      <StyledImage src={Volunteer7} />
      <StyledImage src={Volunteer8} />
    </VolunteerListWrapper>
  );
};

export default VolunteerList;

const VolunteerListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3.8rem;
  margin-bottom: 15rem;
`;

const StyledImage = styled.img`
  width: 16.1rem;
`;
