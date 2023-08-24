import React, { useState } from 'react';

import Modal from './Modal';
import Rank from './Rank';
import { styled } from 'styled-components';

const RANK_LIST = [
  {
    rank: 4,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 5,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 6,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 7,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 8,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 9,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 9,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 9,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 9,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
  {
    rank: 9,
    name: '홍길동',
    department: '디자인조형학부',
    score: 4500,
    state: 'up',
  },
];

const RankList = () => {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <RankListWrapper>
      {modalOn && <Modal onClose={handleModal} />}
      {RANK_LIST.map((item, idx) => (
        <Rank
          onClick={handleModal}
          key={idx + item.name}
          name={item.name}
          department={item.department}
          score={item.score}
          rank={item.rank}
          state={item.state}
        />
      ))}
    </RankListWrapper>
  );
};

export default RankList;

const RankListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-top: 2rem;
  width: 100%;
`;
