import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Mypage from './pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
