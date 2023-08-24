import React, { useState } from 'react';

import Modal from './Modal';
import Rank from './Rank';
import { modalState } from '../../states/modalState';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';

const RANK_LIST = [
  {
    rank: 4,
    name: '이재훈',
    department: '컴퓨터정보공학과',
    score: 9800,
    state: 'up',
  },
  {
    rank: 5,
    name: '도소현',
    department: '컴퓨터공학과',
    score: 7700,
    state: 'down',
  },
  {
    rank: 6,
    name: '서지원',
    department: '언론홍보학과',
    score: 6500,
    state: 'down',
  },
  {
    rank: 7,
    name: '강민서',
    department: '시각디자인학과',
    score: 6400,
    state: 'up',
  },
  {
    rank: 8,
    name: '김태희',
    department: '융합콘텐츠학과',
    score: 4500,
    state: 'up',
  },
  {
    rank: 9,
    name: '이동헌',
    department: '사회학과',
    score: 2500,
    state: 'up',
  },
  {
    rank: 10,
    name: '정찬우',
    department: '국제법무학과',
    score: 1800,
    state: 'down',
  },
];
const RankList = () => {
  const [modalOn, setModalOn] = useRecoilState(modalState);

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
  margin-bottom: 15rem;
  width: 100%;
`;
