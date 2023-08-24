import Rank from './Rank';
import React from 'react';
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
  return (
    <RankListWrapper>
      {RANK_LIST.map((item, idx) => (
        <Rank
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
