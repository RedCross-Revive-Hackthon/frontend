import Footer from '../components/common/Footer';
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
      <Footer />
    </>
  );
};

export default Home;
