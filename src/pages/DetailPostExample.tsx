import { DetailPost } from '../components/icon/icon';
import Footer from '../components/common/Footer';
import React from 'react';
import { styled } from 'styled-components';
const DetailPostExample = () => {
  return (
    <>
      <StyledDetailPost />
      <Footer />
    </>
  );
};

export default DetailPostExample;

const StyledDetailPost = styled(DetailPost)`
  margin-top: 2.2rem;
  margin-bottom: 15rem;
`;
