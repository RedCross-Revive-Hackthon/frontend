import { HelpPost1, HelpPost2, HelpPost3, HelpPost4, HelpPost5 } from '../icon/icon';

import { styled } from 'styled-components';

const HelpPosts = () => {
  return (
    <PostsWrapper>
      <HelpPost1 />
      <HelpPost2 />
      <HelpPost3 />
      <HelpPost4 />
      <HelpPost5 />
    </PostsWrapper>
  );
};

export default HelpPosts;

const PostsWrapper = styled.main`
  margin-top: 8.2rem;
  margin-bottom: 15rem;
`;
