import { GivePost1, GivePost2, GivePost3, GivePost4, GivePost5 } from '../icon/icon';

import React from 'react';
import { styled } from 'styled-components';

const GivePosts = () => {
  return (
    <PostsWrapper>
      <GivePost1 />
      <GivePost2 />
      <GivePost3 />
      <GivePost4 />
      <GivePost5 />
    </PostsWrapper>
  );
};

export default GivePosts;

const PostsWrapper = styled.main`
  margin-top: 8.2rem;
  margin-bottom: 15rem;
`;
