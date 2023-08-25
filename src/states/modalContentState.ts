import { RankProps } from '../components/home/Rank';
import { atom } from 'recoil';
export const modalContentState = atom<RankProps>({
  key: 'modalContentState',
  default: {
    name: '',
    department: '',
    score: 0,
    rank: 0,
    state: 'up',
  },
});
