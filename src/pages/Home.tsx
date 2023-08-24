import PrizeList from '../components/home/PrizeList';
import RankList from '../components/home/RankList';
import RankTitle from '../components/home/RankTitle';
import React from 'react';

const Home = () => {
  return (
    <>
      <RankTitle />
      <PrizeList />
      <RankList />
    </>
  );
};

export default Home;
