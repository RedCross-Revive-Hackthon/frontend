import Footer from '../components/common/Footer';
import GivePosts from '../components/community/GivePosts';
import Header from '../components/community/Header';
import React from 'react';
import { communityTapState } from '../states/communityTapState';
import { useRecoilValue } from 'recoil';

const Community = () => {
  const currentTap = useRecoilValue(communityTapState);
  return (
    <>
      <Header />
      {currentTap ? <></> : <GivePosts />}

      <Footer />
    </>
  );
};

export default Community;
