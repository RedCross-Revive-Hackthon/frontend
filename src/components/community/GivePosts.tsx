import { GivePost1, GivePost2, GivePost3, GivePost4, GivePost5 } from '../icon/icon';

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const GivePosts = () => {
  return (
    <PostsWrapper>
      <Link to="/community/give/1">
        <GivePost1 />
      </Link>
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
